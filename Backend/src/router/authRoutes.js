const express = require('express')
const authRouter = express.Router()
const {jwtAuth} = require('../middleware/loginAuth.js')
const jwt = require('jsonwebtoken')
const validator = require('validator')
const bcrypt = require('bcrypt')
const {Seller} = require('../model/sellerSchema.js')
const {User} = require('../model/userSchema.js')


authRouter.post('/signup', async (req, res) => {
            try{

                if(!validator.isEmail(req.body.email)){
                    throw new Error('Email is not valid')
                }
                
                if(!validator.isStrongPassword(req.body.password)){
                    throw new Error('Password is not strong')
                }
                
                const hashedPassword = await bcrypt.hash(req.body.password, 10)
                
                req.body.password = hashedPassword

                if(req.body.isSeller == true){
                    await Seller.create(req.body)
                    res.send(`Seller Created with email: ${req.body.email}`)
                    return
                }
                await User.create(req.body)
                res.send(`User Created with email: ${req.body.email}`)

                
            }catch(error){
                res.status(400).send(error.message)
                console.log(error)
            }
})

authRouter.post('/login', async (req, res) => {

                if (!req.body) {
                    return res.status(400).json({ error: "Request body is missing" });
                }

                const {email, password} = req.body
                const seller = await Seller.findOne({email})
                const user = await User.findOne({email})

                const account = user || seller

                if(!account){
                    res.status(404).send('User does not exist! Please signup')
                }
                
                const passwordMatched = await bcrypt.compare(password, account.password)
                
                if(!passwordMatched){
                    throw new Error('Invalid Credentials')
                }   
                
                const token = jwt.sign({id: account._id}, process.env.SECRET_KEY, {expiresIn: '1d'})
                
                res.cookie('token', token)

                account.lastLogin = new Date()

                await account.save()

                res.send('Login Successful')
})

authRouter.get('/profile', jwtAuth , async (req, res) => {
    try{

        const seller = await Seller.findById(req.user.id)
        const user = await User.findById(req.user.id)

        const account = seller || user
        if(!account){
            res.status(404).send('Account not found')
        }
        res.send(`Welcome!, ${account}`)
    }catch(error){
        res.send(error)
    }
})

authRouter.post('/logout', jwtAuth, async (req, res) => {
            try{

                const token = req.cookies.token
                const seller = await Seller.findById(req.user.id)
                const user = await User.findById(req.user.id)

                const account = seller || user
                
                res.clearCookie('token', token)

                account.lastLogout = new Date()
                await account.save()

                res.status(200).json({message: 'Successfully Logged Out'})
            }catch(error){
                res.send(error)
            }
})

module.exports = authRouter