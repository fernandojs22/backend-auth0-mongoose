const { gql } = require('apollo-server-express')
const { Employee, EmployeeQuery } = require('./employee')

const types = `${Employee}`
const query = `
type Query {
    ${EmployeeQuery}
}`

module.exports = gql`${types} ${query}` 