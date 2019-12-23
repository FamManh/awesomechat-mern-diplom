const { buildSchema } = require("graphql");

module.exports = buildSchema(`
    type User{
        _id: ID!
        firstName: String
        lastName: String
        email: String!
        password: String
        avatar: String
        createdAt: String
        updatedAt: String
    }

    input UserInput {
        firstName: String!
        lastName: String!
        email: String!
        password: String!
    }

    type AuthData{
        userId: ID!
        email: String!
        token: String!
        tokenExpiration: Int!
    }

    type RootQuery{
        users: [User!]!
        user: User!
    }

    type RootMutation {
        signup(userInput: UserInput!) : String!
        signin(email: String!, password: String!): AuthData!
    }

    schema {
        query: RootQuery
        mutation: RootMutation
    }
`);
