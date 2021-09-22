require('dotenv').config()
const passport = require('passport')
const localStrategy = require('passport-local').Strategy

const jwtStrategy = require('passport-jwt').Strategy
const ExtractJwt = require('passport-jwt').ExtractJwt

/*BORRAR*/
const User = require('../models/User')
/*BORRAR*/

const { signinEmailLocal } = require('./strategies/signin.strategy')

passport.use('login-local-email', new localStrategy({
    usernameField: 'email',
    passwordField: 'password'
// }, () => signinEmailLocal))
/*BORRAR*/
}, async (email, password, done) => {
    try {
        // User.findOne({ email }, async (err, user) => {

        //     const validate = await user.isValidPassword(password)

        //     if (!err) throw err
        //     if (!user) return done(null, false, { message: 'User not found' })
        //     if (!validate) return done(null, false, { message: 'Password Wrong' })

        //     return done(null, user, { message: 'Login Successfull' })
        // })
        /*BORRAR*/
        const user = await User.findOne({ email } )
        if (!user) {
            return done(null, false, { message: 'User not found'})
        }

        const validate = await user.isValidPassword(password)
        if (!validate) {
            return done(null, false, { message: 'Wrong password'})
        }
        return done(null, user, { message: 'Login Successfull'})
        /*BORRAR*/
    } catch (err) {
        done(err)
    }
}))
/*BORRAR*/

passport.use(new jwtStrategy({
    secretOrKey: process.env.TOP_SECRET,
    jwtFromRequest: ExtractJwt.fromUrlQueryParameter('secret_token')
}, async (token, done) => {
    try {
        return done(null, token.user)
    } catch (e) {
        done(error)
    }
}))


