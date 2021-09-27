require('dotenv').config()
const session = require('express-session')
const cookieParser = require('cookie-parser')
const passport = require('passport')

module.exports = expressSessionMiddleWare = (app) => {

    app.use(cookieParser(process.env.TOP_SECRET))

    app.use(
        session({
        secret: process.env.TOP_SECRET,
        resave: false,
        saveUninitialized: true
    }))
    
    app.use(passport.initialize())
    app.use(passport.session())

    return app
}