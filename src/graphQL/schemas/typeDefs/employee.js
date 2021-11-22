module.exports = {
    Employee: `
    type Employee {
    _id: ID!,
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
    }`,
    EmployeeQuery: `
    employee(employeeId: ID!): Employee,
    employees: [Employee]!
    `
}