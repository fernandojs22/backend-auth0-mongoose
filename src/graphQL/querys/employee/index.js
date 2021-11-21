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
        if (context.user) {
            const data = await Employee.findOne({ _id: args.employeeId })
            return data
        } else {
            throw new Error('new Error')
        }
    }
}

const employees = {
    type: new GraphQLList(EmployeeType),
    description: "List of All Employees",
    resolve: async (parent, args, context) => {
        if (context.user) {
            const data = await Employee.find({})
            return data
        } else {
            throw new Error('new Error')
        }
    }
}

module.exports = { employee, employees }