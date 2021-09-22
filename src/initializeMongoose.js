require('dotenv').config()
const mongoose = require('mongoose')

const ops = {
    server: { auto_connect: false},
    user: process.env.MONGODB_USER,
    password: process.env.MONGODB_PASSWORD,
}
const uri = `${process.env.MONGODB_SERVER}:${process.env.MONGODB_PORT}/${process.env.MONGODB_DATABASE}`

module.exports = initializeMongoose = () => {
    // return mongoose.createConnection(
    //     uri,
    //     ops,
    //     () => {
    //         console.log('Mongoose is connected')
    //     }
    // )

    /*BORRAR*/
    return mongoose.connect('mongodb+srv://fernandojs:admin@cluster0.onryd.mongodb.net/myFirstDatabase?retryWrites=true&w=majority',{
        useNewUrlParser: true,
        useUnifiedTopology: true,
        // useCreateIndex: true
    }, () => {
        console.log('Mongoose is connected')
    })
    /*BORRAR*/
}