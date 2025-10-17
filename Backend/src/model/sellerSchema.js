const mongoose = require('mongoose')
const validator = require('validator')

const sellerSchema = new mongoose.Schema({
    firstname : {
        type: String,
        required: true,
        trim: true
    },
    lastname : {
        type: String,
        trim: true
    },
    email : {
        type: String,
        unique : true,
        trim: true,
        required : true,
        validate : {
            validator: function(value){
                return validator.isEmail(value)
            },
            message: `Email is not valid`
        }
    },
    password : {
        type : String,
        required : true,
        validate : {
            validator : function(value){
                return validator.isStrongPassword(value)
            },
            message : `Password is not valid`
        }
    },
    isSeller : Boolean,
    
    lastLogin : {type : Date},

    lastLogout : {type : Date}

}, {
    timestamps: {createdAt: true, updatedAt: false}
})

const Seller = mongoose.model('Seller', sellerSchema)

module.exports = {
    Seller
}