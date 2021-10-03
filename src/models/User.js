const mongoose = require('mongoose')
const bcrypt = require('bcrypt')
const { uniqueNamesGenerator, NumberDictionary, adjectives, colors, animals } = require('unique-names-generator')


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
    },
    userName: {
        type: String,
        unique: true
    },
    authorities: {
        type: Array,
        required: true
    },
    createdBy: {
        type: String
    },
    createdDate: {
        type: Date      
    },
    lastModifiedBy: {
        type: String
    },
    lastModifiedDate: {
        type: Date
    },
    country: {
        type: Object
    }
})

const numberDictionary = NumberDictionary.generate({ min: 100, max: 999 });

const shortName = uniqueNamesGenerator({
    dictionaries: [adjectives, animals, numberDictionary],
    separator: '_'
});

UserScheme.pre('save', async function (next) {

    const hash = await bcrypt.hash(this.password, 10)
    this.password = hash

    this.authorities = ['ROLE_USER']

    this.userName = shortName

    this.createdBy = this.email
    this.createdDate = new Date()

    this.country = {
        label: 'United States',
        value: 'US'
    }
    next()
})

UserScheme.methods.isValidPassword = async function (pwd) {
    const user = this
    const compare = await bcrypt.compare(pwd, user.password)
    return compare
}

module.exports = mongoose.model('User', UserScheme)