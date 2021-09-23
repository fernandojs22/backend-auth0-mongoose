const passport = require('passport')

module.exports = profileRoute = (router) => {

  router.get('/profile', passport.authenticate('jwt', { session: false }), (req, res, next) => {
    res.json({
      message: 'You did it!',
      user: req.user,
      // token: req.query.secret_token,
    })
  })
  
}
