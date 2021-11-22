require('dotenv').config()
const { ApolloServer } = require('apollo-server-express')
const { typeDefs, resolvers } = require('./graphQL/index-apollo')
// const { makeExecutableSchema } = require('apollo-server-express')
const { makeExecutableSchema } = require('@graphql-tools/schema')
const { applyMiddleware } = require('graphql-middleware')
const { shield } = require('graphql-shield')
const passport = require('passport')
const jwtStrategy = require('passport-jwt').Strategy
const ExtractJwt = require('passport-jwt').ExtractJwt
const User = require('./models/User')

const isAuthenticated = require('./graphQL/rules/is-authenticated')

/* Revisar */
const express = require('express')
const app = express()
/* Revisar */

const PORT = process.env.PORT_DATABASE

module.exports = Server = async () => {

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

    const schema = makeExecutableSchema({ typeDefs, resolvers })

    const permissions = shield({
        Query: {
            employee: isAuthenticated,
            employees: isAuthenticated
        }
        // Mutation: {}
    })

    const schemaWithPermissions = applyMiddleware(schema, permissions)

    const server = new ApolloServer({
        // typeDefs,
        // resolvers,
        // schema: schema,
        schema: schemaWithPermissions,
        context: ({ req }) => ({
            user: req.user
        })
    });

    await server.start()
    server.applyMiddleware({ app })

    return app.listen(PORT, () => {
        console.log(`GraphQL Server running on port ${PORT}`)
    })
}

