const passport = require('passport')
const jwt = require('jsonwebtoken')
const User = require('../../../models/User')
const { REGISTER } = require('../../routes')

module.exports = registerRoute = (router) => {

  router.post(REGISTER, passport.authenticate('register-local-email', { session: false }), async (req, res, next) => {

    const { email, password, ...body} = req.body

    await User.findOneAndUpdate({_id: req.user._id}, body)  

    res.json({
      message: 'Signup successful',
      user: req.user
    })
  })

}
