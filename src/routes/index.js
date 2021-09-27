const express = require('express')
const router = express.Router()

router.get('/',(req, res) => {
    res.redirect('/register')
})

require('./authentication/login')(router)
require('./authentication/register')(router)
require('./authentication/logout')(router)
require('./profile')(router)
require('./employees')(router)
require('./authentication/reset')(router)

module.exports = router
