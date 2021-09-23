const passport = require('passport')
const jwt = require('jsonwebtoken')

module.exports = registerRoute = (router) => {

  router.post('/register', passport.authenticate('register-local-email', { session: false }), async (req, res, next) => {
    res.json({
      message: 'Signup successful',
      user: req.user
    })
  })

}
