const { 
    GraphQLObjectType, 
    GraphQLString,
    GraphQLNonNull
} = require('graphql')

module.exports = new GraphQLObjectType({
    name: "Employee",
    description: "This represent a employee object",
    fields: () => ({
        _id: {
            type: new GraphQLNonNull(GraphQLString)
        },
        id: {
            type: new GraphQLNonNull(GraphQLString)
        },
        firstName: {
            type: GraphQLString
        },
        lastName: {
            type: GraphQLString
        },
        jobTitle: {
            type: GraphQLString
        },
        email: {
            type: GraphQLString
        },
        workPhone: {
            type: GraphQLString
        },
        homePhone: {
            type: GraphQLString
        },
        mobilePhone: {
            type: GraphQLString
        },
        country: {
            type: GraphQLString
        },
        street: {
            type: GraphQLString
        },
        city: {
            type: GraphQLString
        },
        state: {
            type: GraphQLString
        },
        zipCode: {
            type: GraphQLString
        },
        notes: {
            type: GraphQLString
        },
        avatar: {
            type: GraphQLString
        }
    })
})
