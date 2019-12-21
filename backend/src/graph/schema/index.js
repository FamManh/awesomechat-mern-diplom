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

    type RootQuery{
        users: [User!]!
        user: User!
    }

    type RootMutation {
        signup(userInput: UserInput) : User!
    }

    schema {
        query: RootQuery
        mutation: RootMutation
    }
`);
