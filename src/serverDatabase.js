require('dotenv').config()
const express = require('express')
const router = express.Router()

const PORT = process.env.PORT_DATASTORE

require('./routes/profile')(router)
require('./routes/employees')(router)

module.exports = Server = (app) => {
    
    app.use(router)

    return app.listen(PORT, () => {
        console.log(`Server running on port ${PORT}`)
    })
}