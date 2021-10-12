const passport = require('passport')
const User = require('../../models/User')
const { PROFILE } = require('../routes')

module.exports = profileRoute = (router) => {

  router.get(PROFILE, passport.authenticate('jwt', { session: false }), (req, res, next) => {
    res.json({
      message: 'You did it!',
      user: req.user,
      // token: req.query.secret_token,
    })
  })

  router.put(PROFILE, passport.authenticate('jwt', { session: false }), (req, res, next) => {

    const { _id, password, agree, __v, authorities, createdBy, createdDate, lastModifiedBy, lastModifiedDate, email, id, roles, ...body} = req.body

    body.lastModifiedBy = req.user.email
    body.lastModifiedDate = new Date()

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
