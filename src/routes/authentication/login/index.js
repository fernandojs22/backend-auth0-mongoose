const passport = require('passport')
const jwt = require('jsonwebtoken')
const { LOGIN_LOCAL } = require('../../routes')

module.exports = loginRoute = (router) => {

  // function generateAccessToken(user) {
  //   return jwt.sign({ user: body }, process.env.ACCESS_TOKEN_SECRET, { expiresIn: '15s'})
  // }

  router.post(LOGIN_LOCAL, async (req, res, next) => {
    passport.authenticate('login-local-email', async (err, user, info) => {
      try {
        if (err || !user) {
          const error = new Error('new Error')
          return next(error)
        }
        req.login(user, { session: false }, async (err) => {
          if (err) return next(err)
          const body = { _id: user._id, email: user.email }

          // const token = generateAccessToken(user)
          const token = jwt.sign({ user: body }, process.env.ACCESS_TOKEN_SECRET)
          // const refreshToken = jwt.sign({ user: body }, process.env.REFRESH_TOKEN_SECRET)
          return res.json({ token, isAuthenticated: req.isAuthenticated() })
        })
      }
      catch (e) {
        return next(e)
      }
    })(req, res, next)
  })
}
