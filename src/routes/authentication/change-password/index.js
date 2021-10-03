require('dotenv').config()
const passport = require('passport')
const User = require('../../../models/User')
const bcrypt = require('bcrypt')
const { CHANGE_PASSWORD } = require('../../routes')

module.exports = resetRoute = (router) => {

  router.put(CHANGE_PASSWORD, passport.authenticate('jwt', { session: false }), (req, res, next) => {
    
    const { _id, password, newPassword} = req.body

    try {
      User.findOne({_id: _id }, async (err, user) => {

        const validate = await user.isValidPassword(password)
        const hash = await bcrypt.hash(newPassword, 10)

        if (err) throw err
        if (!user) res.json({ message: `User Don't Exists` })
        if (!validate) res.status(401).json({message:'Password is wrong'})

        if (user && validate) {
          const usr = await User.findOneAndUpdate({ _id: _id }, { password: hash })
          res.json({ message: 'Password Changed' })
        }
      })
    } catch (err) {
      res.json({ error: err })
    }
  })
  
}
