require('method-override')

module.exports = logoutRoute = (router) => {

  router.delete('/logout', (req, res, next) => {
    req.logOut()
    res.redirect('/')

  })
  
}
