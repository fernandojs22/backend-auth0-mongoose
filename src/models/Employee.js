const mongoose = require('mongoose')
const bcrypt = require('bcrypt')
const { generate } = require('short-uuid')

const Scheme = mongoose.Schema

const EmployeeScheme = new Scheme({
    id: {
        type: String,
        required: true,
        unique: true
    },
    firstName: {
        type: String,
        required: false
    },
    lastName: {
        type: String,
        required: false
    },
    jobTitle: {
        type: String,
        required: false
    },
    email: {
        type: String,
        required: false,
        unique: true
    },
    workPhone: {
        type: String,
        required: false
    },
    homePhone: {
        type: String,
        required: false
    },
    mobilePhone: {
        type: String,
        required: false
    },
    country: {
        type: String,
        required: false
    },
    street: {
        type: String,
        required: false
    },
    city: {
        type: String,
        required: false
    },
    state: {
        type: String,
        required: false
    },
    zipCode: {
        type: String,
        required: false
    },
    notes: {
        type: String,
        required: false
    },
    avatar: {
        type: String,
        required: false
    }
})

EmployeeScheme.pre('save', async function(next){
    const id = generate()
    this.id = id
    next()
})

module.exports = mongoose.model('Employee',EmployeeScheme)