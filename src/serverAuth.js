require('dotenv').config()
const express = require('express')
const router = express.Router()

require('./routes/authentication/login')(router)
require('./routes/authentication/register')(router)
require('./routes/authentication/logout')(router)
require('./routes/authentication/reset')(router)

const PORT = process.env.PORT_AUTHENTICATION

module.exports = Server = (app) => {
    app.use(router)

    return app.listen(PORT, () => {
        console.log(`Server running on port ${PORT}`)
    })
}
