const passport = require('passport')
const jwt = require('jsonwebtoken')

module.exports = loginRoute = (express) => {

  const router = express.Router()

  router.post('/login/local', async (req, res, next) => {
    passport.authenticate('login-local-email', async (err, user, info) => {
      try {
        if (err || !user) {
          console.log(err)
          const error = new Error('new Error')
          return next(error)
        }
        req.login(user, { session: false }, async (err) => {
          if (err) return next(err)
          const body = { _id: user._id, email: user.email }

          const token = jwt.sign({ user: body }, process.env.TOP_SECRET)
          return res.json({ token, isAuthenticated: req.isAuthenticated() })
        })
      }
      catch (e) {
        return next(e)
      }
    })(req, res, next)
  })
}
