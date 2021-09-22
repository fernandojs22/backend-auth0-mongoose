const mongoose = require('mongoose')
const bcrypt = require('bcrypt')

const Scheme = mongoose.Schema

const UserScheme = new Scheme({
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    }
})

UserScheme.methods.isValidPassword = async function(pwd) {
    const user = this
    const compare = await bcrypt.compare(pwd, user.password)
    return compare
}

module.exports = mongoose.model('User',UserScheme)