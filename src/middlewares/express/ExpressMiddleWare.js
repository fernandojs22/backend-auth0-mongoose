const express = require('express')

module.exports = expressMiddleWare = (app) => {
    app.use(express.json())
    app.use(express.urlencoded({ extended: true}))
    return app
}