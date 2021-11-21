const { gql } = require('apollo-server-express')

module.exports = gql`
    type Employee {
        id: ID!,
        firstName: String,
        lastName: String,
        jobTitle: String,
        email: String,
        workPhone: String,
        homePhone: String,
        mobilePhone: String,
        country: String,
        street: String,
        city: String,
        state: String,
        zipCode: String,
        notes: String,
        avatar: String
    }

    type Query {
        employee(employeeId: ID!): Employee,
        employees: [Employee]!
    }
`