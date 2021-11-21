const employee = require('./employee')

const resolvers = { Query: { ...employee.Query } }

module.exports = resolvers