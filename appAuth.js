const express = require('express')

const initializeMongoose = require('./src/initializeMongoose')
const Server = require('./src/serverAuth')
const middlewares = require('./src/middlewares')

const app = express()

require('./src/auth')

middlewares(app)

initializeMongoose()

Server(app)

