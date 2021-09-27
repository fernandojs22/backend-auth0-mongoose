const express = require('express')
const router = express.Router()

router.get('/',(req, res) => {
    // res.redirect('/register')
    res.send(req.isAuthenticated())
})

require('./authentication/login')(router)
require('./authentication/register')(router)
require('./authentication/logout')(router)
require('./profile')(router)

module.exports = router
