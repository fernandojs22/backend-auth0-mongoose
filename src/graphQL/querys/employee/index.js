const EmployeeType = require('../../types/Employee')
const Employee = require('../../../models/Employee')

const {
    GraphQLString,
    GraphQLList
} = require('graphql')

const employee = {
    type: EmployeeType,
    description: "A Simple Employee",
    args: {
        employeeId: {
            type: GraphQLString
        }
    },
    resolve: async (parent, args, context) => {
        const data = await Employee.findOne({ _id: args.employeeId })
        return data
    }
}

const employees = {
    type: new GraphQLList(EmployeeType),
    description: "List of All Employees",
    resolve: async (parent, args, context) => {
        const data = await Employee.find({})
        return data
    }
}

module.exports = { employee, employees }