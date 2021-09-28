const express = require('express')

const initializeMongoose = require('./src/initializeMongoose')
const Server = require('./src/serverDatabase')
const middlewares = require('./src/middlewares')

const app = express()

require('./src/auth')

middlewares(app)

initializeMongoose()

Server(app)

