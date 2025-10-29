const mongoose = require('mongoose')

async function connectDB(){
    try{

        const connection = await mongoose.connect(`mongodb+srv://${process.env.MONGO_USERNAME}:${process.env.MONGO_PASSWORD}@cluster0.yufdedk.mongodb.net/${process.env.MONGO_DB}`)
        console.log(`Database Connected Successfully`)

    }catch(err){

        console.log(`Database Connection Error : ${err.message}`)

    }

}

module.exports = {
    connectDB
}