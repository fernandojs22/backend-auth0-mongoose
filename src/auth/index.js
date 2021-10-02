require('dotenv').config()
const passport = require('passport')
const localStrategy = require('passport-local').Strategy

const jwtStrategy = require('passport-jwt').Strategy
const ExtractJwt = require('passport-jwt').ExtractJwt

const { signinEmailLocal } = require('./strategies/signin.strategy')
const { signupEmailLocal } = require('./strategies/signup.strategy')

const User = require('../models/User')

passport.use('login-local-email', new localStrategy({
    usernameField: 'email',
    passwordField: 'password'
}, signinEmailLocal))

passport.use('register-local-email', new localStrategy({
    usernameField: 'email',
    passwordField: 'password'
}, signupEmailLocal))

passport.use(new jwtStrategy({
    secretOrKey: process.env.ACCESS_TOKEN_SECRET,
    jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken()
}, async (token, done) => {
    try {

        User.findOne({_id: token.user._id}, (err, user) => {
            const { password, agree, __v, ...userInformation } = user._doc
            return done(null, userInformation)
        })   
    } catch (e) {
        done(e)
    }
}))

