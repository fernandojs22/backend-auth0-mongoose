require('dotenv').config()
const { compare } = require('bcrypt')
const mongoose = require('mongoose')

const ops = {
    server: { auto_connect: false },
    user: process.env.MONGODB_USER,
    password: process.env.MONGODB_PASSWORD
}
const uri = `mongodb+srv://${process.env.MONGODB_SERVER}:${process.env.MONGODB_PORT}/${process.env.MONGODB_DATABASE}`
const uri_usr = `mongodb+srv://${process.env.MONGODB_USER}:${process.env.MONGODB_PASSWORD}@${process.env.MONGODB_SERVER}/${process.env.MONGODB_DATABASE}`

module.exports = initializeMongoose = () => {

    // return mongoose.createConnection(
    //     uri,
    //     ops,
    //     () => {
    //         console.log('Mongoose is connected')
    //     }
    // )

    return mongoose.connect(uri_usr,{
        useNewUrlParser: true,
        useUnifiedTopology: true,
    }, () => {
        console.log('Mongoose is connected')
    })
}