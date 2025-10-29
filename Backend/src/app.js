// Imports
require('dotenv').config()
const express = require('express')
const {connectDB} = require('./config/database.js')
const cookieParser = require('cookie-parser')
const cors = require('cors')

const {Product} = require('./model/productSchema.js')

const authRoutes = require('./router/authRoutes.js')
const sellerRoutes = require('./router/sellerRoutes.js')
const cartRoutes = require('./router/cartRoutes.js')

const frontendURL = process.env.FRONTEND_URL

const app = express()
app.use(express.json())
app.use(cookieParser())
app.use(cors({
    origin : frontendURL,
    credentials : true
}))

async function startServer(){
    try{
        await connectDB()

        // Authorization

        app.use('/auth', authRoutes)

        // Products

        app.get('/products', async (req, res) => {
            const products = await Product.find()

            res.send(products.length > 0 ? products : 'Database Empty')
        })

        app.get('/products/premium', async (req, res) => {
            const products = await Product.find({ category: 'Premium' })

            res.send(products.length > 0 ? products : 'No Premium Products Found')
        })
        app.get('/products/luxury', async (req, res) => {
            const products = await Product.find({ category: 'Luxury' })

            res.send(products.length > 0 ? products : 'No Luxury Products Found')
        })

        // Products CRUD

        app.use('/seller', sellerRoutes )
        app.use('/cart', cartRoutes )

        const port = process.env.PORT || 3000
        
        app.listen(port, () => {
            console.log(`Server successfully connected on port ${port}`)
        })

    }catch(err){
        console.log(`Server Error: ${err.message}`)
    }
}

startServer()