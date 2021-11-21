const Employee = require('../../../models/Employee')

module.exports = {
    Query: {
        employee: async (parent, args, context) => {
            if (context.user) {
                const data = await Employee.findOne({ _id: args.employeeId })
                return data
            } else {
                throw new Error('new Error')
            }
        },
        employees: async (parent, args, context) => {
            if (context.user) {
                const data = await Employee.find({})
                return data
            } else {
                throw new Error('new Error')
            }
        }
    }
}