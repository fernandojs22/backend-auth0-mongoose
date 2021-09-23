const User = require('../../models/User')

const signupEmailLocal = (email, password, done) => {
    try {
        User.findOne({ email }, async (err, usr) => {

            if (err) throw err
            if (usr) return done(null, false, { message: 'User Already Exist' })
            
            if (!usr) {
                const user = await User.create({ email, password })
                return done(null, user, { message: 'User Created' })
            }
        })
    } catch (err) {
        done(err)
    }
}

module.exports = { signupEmailLocal }