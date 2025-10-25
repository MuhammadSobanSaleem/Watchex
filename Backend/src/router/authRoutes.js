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
                    res.status(201).json({ message: `Seller Created with email: ${req.body.email}` })
                    return
                }
                await User.create(req.body)

                res.status(201).json({ message: `User Created with email: ${req.body.email}` })

                
            }catch(error){
                if (error && error.code === 11000) {
                    res.status(409).json({ error: 'Email already exists' })
                } else {
                    const isClientError = error && (
                        error.name === 'ValidationError' ||
                        error.name === 'CastError' ||
                        error.message === 'Email is not valid' ||
                        error.message === 'Password is not strong'
                    )
                    const status = isClientError ? 400 : 500
                    res.status(status).json({ error: error.message || 'Internal Server Error' })
                }
                console.error(error)
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
                    return res.status(404).json({ error: 'User does not exist! Please signup' })
                }
                
                const passwordMatched = await bcrypt.compare(password, account.password)
                
                if(!passwordMatched){
                    return res.status(401).json({ error: 'Invalid Credentials' })
                }   
                
                const token = jwt.sign({id: account._id}, process.env.SECRET_KEY, {expiresIn: '1d'})
                
                res.cookie('token', token, {
                    httpOnly: true,
                    secure: false,
                    sameSite: 'lax',
                    path: '/'
                })

                account.lastLogin = new Date()

                await account.save()

                res.status(200).json({
                    message: 'Login Successful',
                    email: account.email,
                })
})

authRouter.get('/profile', jwtAuth , async (req, res) => {
    try{

        const seller = await Seller.findById(req.user.id) // For future use case of seller profile
        const user = await User.findById(req.user.id)

        const account = seller || user
        
        if(!account) return res.status(404).json({ error: 'Account not found' })
        
        res.status(200).json({email: account.email});

    }catch(error){
        console.error(error)
        const status = (error.name === 'ValidationError' || error.name === 'CastError') ? 400 : 500
        res.status(status).json({ error: error.message || 'Internal Server Error' })
    }
})

authRouter.post('/logout', jwtAuth, async (req, res) => {
            try{

                const token = req.cookies.token
                const seller = await Seller.findById(req.user.id)
                const user = await User.findById(req.user.id)

                const account = seller || user
                
                res.clearCookie('token')

                account.lastLogout = new Date()
                await account.save()

                res.status(200).json({message: 'Successfully Logged Out'})
            }catch(error){
                console.error(error)
                const status = (error.name === 'ValidationError' || error.name === 'CastError') ? 400 : 500
                res.status(status).json({ error: error.message || 'Internal Server Error' })
            }
})

module.exports = authRouter