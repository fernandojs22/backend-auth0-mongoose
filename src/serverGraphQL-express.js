require('dotenv').config()
const { graphqlHTTP } = require('express-graphql')
const { schema } = require('./graphQL/index-express')
const session = require('express-session')
const passport = require('passport')
const jwtStrategy = require('passport-jwt').Strategy
const ExtractJwt = require('passport-jwt').ExtractJwt
const User = require('./models/User')

const PORT = process.env.PORT_DATABASE

module.exports = Server = (app) => {

    app.use(
        session({
            secret: process.env.ACCESS_TOKEN_SECRET,
            resave: false,
            saveUninitialized: true
        }))


    passport.use(new jwtStrategy({
        secretOrKey: process.env.ACCESS_TOKEN_SECRET,
        jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken()
    }, async (token, done) => {
        try {

            User.findOne({ _id: token.user._id }, (err, user) => {
                const { password, agree, __v, authorities, createdBy, createdDate, lastModifiedBy, lastModifiedDate, ...userInformation } = user._doc

                userInformation.roles = []

                authorities.map((role) => {
                    userInformation.roles.push(role)
                })

                return done(null, userInformation)
            })
        } catch (e) {
            done(e)
        }
    }))

    app.use(passport.initialize())
    app.use(passport.session())

    app.use('/graphql', (req, res, next) => {
        passport.authenticate('jwt', { session: false }, (err, user, info) => {
            if (user) {
                req.user = user
            }
            next()
        })(req, res, next)
    })

    app.use('/graphql', graphqlHTTP({
        graphiql: {
            headerEditorEnabled: true
        },
        schema: schema,
    }))

    return app.listen(PORT, () => {
        console.log(`GraphQL Server running on port ${PORT}`)
    })
}