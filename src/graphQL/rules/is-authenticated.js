const { rule } = require('graphql-shield')

const isAuthenticated = rule()(async (parent, args, context, info) => {
    if (context.user) {
        return true
    } else {
        return new Error('New Error')
    }
})

module.exports = isAuthenticated