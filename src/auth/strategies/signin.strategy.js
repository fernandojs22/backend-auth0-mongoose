const User = require('../../models/User')

const signinEmailLocal = (email, password, done) => {
    try {
        User.findOne({ email }, async (err, user) => {

            const validate = await user.isValidPassword(password)

            if (!err) throw err
            if (!user) return done(null, false, { message: 'User not found' })
            if (!validate) return done(null, false, { message: 'Password Wrong' })

            return done(null, user, { message: 'Login Successfull' })
        })
    } catch (err) {
        done(err)
    }
}

module.exports = { signinEmailLocal }

// try {
//     await User.findOne({email}, async (err, user) => {

//         const validate = await user.isValidPassword(password)

//         if (!err) throw err
//         if (!user) return done(null, false, { message: 'User not found' })
//         if (!validate) return done(null, false, { message: 'Password Wrong' })

//         return done(null, user, { message: 'Login Successfull'})
//     })
// } catch (err) {
//     done(err)
// }