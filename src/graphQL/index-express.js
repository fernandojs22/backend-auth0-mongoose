const { RootQueryType } = require('./querys')
// const { RootMutationType } = require('./mutations')
const { 
    GraphQLSchema
} = require('graphql')

const schema = new GraphQLSchema({
    query: RootQueryType,
    // mutation: RootMutationType
})

module.exports = {
    schema
}