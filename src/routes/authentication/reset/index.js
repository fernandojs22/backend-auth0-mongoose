const passport = require('passport')
const jwt = require('jsonwebtoken')
const User = require('../../../models/User')

module.exports = resetRoute = (router) => {

  router.post('/reset', (req, res, next) => {
    res.json({
      message: 'Reset in progress'
    })
  })

}
