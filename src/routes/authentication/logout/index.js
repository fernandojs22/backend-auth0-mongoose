require('method-override')
const { LOGOUT } = require('../../routes')

module.exports = logoutRoute = (router) => {

  router.delete(LOGOUT, (req, res, next) => {
    req.logOut()
    res.redirect('/')

  })
  
}
