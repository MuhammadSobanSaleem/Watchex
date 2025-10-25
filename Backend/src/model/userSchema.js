const mongoose = require('mongoose')
const validator = require('validator')

const userSchema = new mongoose.Schema({
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
    
    lastLogin : {type : Date},

    lastLogout : {type : Date}

}, {
    timestamps: {createdAt: true, updatedAt: false}
})

const User = mongoose.model('User', userSchema)

module.exports = {
    User
}