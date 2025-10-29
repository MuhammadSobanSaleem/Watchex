const mongoose = require('mongoose')
const {Seller} = require('./sellerSchema.js')

const productSchema = new mongoose.Schema({

    title : {
        type: String,
        required : true,
        trim: true
    },
    price : {
        type: Number,
        required : true,
        trim: true
    },
    description : {
        type: String
    },
    image : {
        type : String,
        required : true,
        trim: true
    },
    category : {
        type : String,
        required : true,
        trim: true,
        lowercase : true
    }
},{
    timestamps : true
}, {
  collection: 'All Products' 
});

const Product = mongoose.model('Product', productSchema)

module.exports = {
    Product
}