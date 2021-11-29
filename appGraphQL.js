const express = require('express')

const initializeMongoose = require('./src/initializeMongoose')
const ServerExpress = require('./src/serverGraphQL-express')
const ServerApollo = require('./src/serverGraphQL-apollo')
// const middlewares = require('./src/middlewares')

const app = express()

// require('./src/auth')

// middlewares(app)

initializeMongoose()

// ServerExpress(app) // express-graphql
ServerApollo() // apollo-server-express