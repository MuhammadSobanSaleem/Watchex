const express = require('express')
const sellerRouter = express.Router()

const {jwtAuth} = require('../middleware/loginAuth.js')
const {Product} = require('../model/productSchema.js')
const {Seller} = require('../model/sellerSchema.js')



sellerRouter.get('/products', jwtAuth, async (req, res) => {
    const products = await Product.find({seller : req.user.id})

    res.send(products.length > 0 ? products : 'Database Empty')
})

sellerRouter.post('/addProduct', jwtAuth, async (req, res) => {
    try{
        uid = req.user.id                
        const seller = await Seller.findById(uid)

        if(!seller) throw new Error("You must be a seller to add product!")


        const product = new Product(req.body)
        

        product.seller = uid

        await product.save()
        
        res.send(`Product Added with id: ${product._id}`)
    }catch(error){
        res.status(400).json({ error: error.message });
    }

})

module.exports = sellerRouter