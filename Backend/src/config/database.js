const mongoose = require('mongoose')

async function connectDB(){
    try{

        const connection = await mongoose.connect(`mongodb+srv://${process.env.DB_USERNAME}:${process.env.DB_PWD}@cluster0.yufdedk.mongodb.net/${process.env.DB_NAME}`)
        console.log(`Database Connected Successfully`)

    }catch(err){

        console.log(`Database Connection Error : ${err.message}`)

    }

}

module.exports = {
    connectDB
}