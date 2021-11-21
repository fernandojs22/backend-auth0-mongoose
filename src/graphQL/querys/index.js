const { GraphQLObjectType } = require('graphql')
const { employee, employees } = require('../querys/employee')

const RootQueryType = new GraphQLObjectType({
    name: "Query",
    description: "Root Query",
    fields: {
        employee: employee,
        employees: employees
    }
})

module.exports = { RootQueryType }