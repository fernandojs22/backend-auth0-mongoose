const passport = require('passport')
const Employee = require('../../models/Employee')
const { EMPLOYEES } = require('../routes')
const { verifyRole } = require('../../roles')

module.exports = profileRoute = (router) => {

  router.get(EMPLOYEES, passport.authenticate('jwt', { session: false }), verifyRole(EMPLOYEES),(req, res, next) => {
    try {
      Employee.find({}, async (err, docs) => {

        if (err) throw err
        if (!docs) res.json({ message: 'No docs' })

        res.json(docs)
      })
    } catch (err) {
      res.json({ error: err })
    }
  })

  router.get(`${EMPLOYEES}/:employeeId`, passport.authenticate('jwt', { session: false }), verifyRole(EMPLOYEES),(req, res, next) => {
    try {
      Employee.findOne({ _id: req.params.employeeId }, async (err, doc) => {

        if (err) throw err
        if (!doc) res.json({ message: 'No doc' })

        res.json(doc)
      })
    } catch (err) {
      res.json({ error: err })
    }
  })

  router.post(EMPLOYEES, passport.authenticate('jwt', { session: false }), (req, res, next) => {
    try {
      Employee.findOne({ email: req.email }, async (err, emp) => {

        if (err) throw err
        if (emp) res.json({ message: 'Employee Already Exists' })

        if (!emp) {
          const employee = await Employee.create(req.body)
          res.json({ message: 'Employee Created' })
        }
      })
    } catch (err) {
      res.json({ error: err })
    }
  })

  router.put(EMPLOYEES, passport.authenticate('jwt', { session: false }), (req, res, next) => {

    const { _id, email, id, ...body} = req.body

    try {
      Employee.findOne({_id: _id }, async (err, emp) => {

        if (err) throw err
        if (!emp) res.json({ message: `Employee Don't Exists` })

        if (emp) {
          const employee = await Employee.findOneAndUpdate({_id: _id}, body) 
          res.json({ message: 'Employee Updated' })
        }
      })
    } catch (err) {
      res.json({ error: err })
    }
  })


  router.delete(EMPLOYEES, passport.authenticate('jwt', { session: false }), (req, res, next) => {

    const { _id, email, id, ...body} = req.body

    try {
      Employee.findOne({_id: req.body._id }, async (err, emp) => {

        if (err) throw err
        if (!emp) res.json({ message: `Employee Don't Exists` })

        if (emp) {
          const employee = await Employee.deleteOne({_id: req.body._id}) 
          res.json({ message: 'Employee Deleted' })
        }
      })
    } catch (err) {
      res.json({ error: err })
    }
  })


}