const mongoose = require('mongoose')
const bcrypt = require('bcrypt')

const Scheme = mongoose.Schema

const UserScheme = new Scheme({
    firstName: {
        type: String,
        required: false
    },
    lastName: {
        type: String,
        required: false
    },
    age: {
        type: Number,
        required: false
    },
    agree: {
        type: Boolean,
        required: false
    },
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

UserScheme.pre('save', async function(next){
    const hash = await bcrypt.hash(this.password,10)
    this.password = hash
    next()
})

UserScheme.methods.isValidPassword = async function(pwd) {
    const user = this
    const compare = await bcrypt.compare(pwd, user.password)
    return compare
}

module.exports = mongoose.model('User',UserScheme)