const passport = require('passport')
const User = require('../../models/User')

module.exports = profileRoute = (router) => {

  router.get('/profile', passport.authenticate('jwt', { session: false }), (req, res, next) => {
    res.json({
      message: 'You did it!',
      user: req.user,
      // token: req.query.secret_token,
    })
  })

  router.put('/profile', passport.authenticate('jwt', { session: false }), (req, res, next) => {

    const { _id, email, id, ...body} = req.body

    try {
      User.findOne({_id: _id }, async (err, emp) => {

        if (err) throw err
        if (!emp) res.json({ message: `User Don't Exists` })

        if (emp) {
          const user = await User.findOneAndUpdate({_id: _id}, body) 
          res.json({ message: 'User Updated' })
        }
      })
    } catch (err) {
      res.json({ error: err })
    }
  })
  
}
