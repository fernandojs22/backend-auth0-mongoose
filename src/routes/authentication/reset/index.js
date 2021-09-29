require('dotenv').config()
const nodemailer = require('nodemailer')
const ids = require('short-id');
const bcrypt = require('bcrypt')
const User = require('../../../models/User')



module.exports = resetRoute = (router) => {

  const transporter = nodemailer.createTransport({
    host: process.env.ETHEREAL_EMAIL_HOST,
    port: process.env.ETHEREAL_EMAIL_PORT,
    secure: false,
    auth: {
      user: process.env.ETHEREAL_EMAIL_AUTH_USER,
      pass: process.env.ETHEREAL_EMAIL_AUTH_PASS
    }
  });

  mailOptions = {
    from: 'Call Tracker System',
    subject: 'Reset Password Email'
  }

  function sentCurrentPass(email, done) {
    const temp = ids.generate();

    try {
      User.findOne({ email }, async (err, user) => {

        const hash = await bcrypt.hash(temp, 10)

        if (err) throw err
        if (!user) return done('User doesnt exist')
        if (user) {
          const usr = await User.findOneAndUpdate({ _id: user._id }, { password: hash })
          return done(`Your temporary password is ${temp}`)
        }
      })
    } catch (err) {
      done(err)
    }
  }

  router.post('/reset', (req, res, next) => {

    sentCurrentPass(req.query.email, (response) => {
      mailOptions.to = req.query.email
      mailOptions.text = response

      transporter.sendMail(mailOptions, (error, info) => {
        if (error) res.status(500).send(error.message)

        res.status(200).json({ message: 'Email was sent' })

      })
    })
  })
}
