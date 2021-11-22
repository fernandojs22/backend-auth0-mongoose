const Employee = require('../../../models/Employee')

module.exports = {
    Query: {
        employee: async (parent, args, context) => {
            const data = await Employee.findOne({ _id: args.employeeId })
            return data
        },
        employees: async (parent, args, context) => {
            const data = await Employee.find({})
            return data
        }
    }
}