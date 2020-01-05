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
        signin(email: String!, password: String!): AuthData!
    }

    type RootMutation {
        signup(userInput: UserInput!) : String!

        sendFriendRequest(friendId: String!): String!
        cancelFriendRequest(friendId: String!): String!
        confirmFriendRequest(friendId: String!): String!
        unfriend(friendId: String!): String!
        verifyEmail(email: String!): String!
    }

    schema {
        query: RootQuery
        mutation: RootMutation
    }
`);
