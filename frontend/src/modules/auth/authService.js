import graphqlClient from "../shared/graph/graphqlClient";
import gql from "graphql-tag";
export const signup = async (firstName, lastName, email, password) => {
    const response = await graphqlClient.mutate({
        mutation: gql`
            mutation AUTH_SIGNUP($userInput: UserInput!) {
                signup(userInput: $userInput)
            }
        `,
        variables: {
            userInput: {
                firstName,
                lastName,
                email,
                password
            }
        }
    });
    return response.data.signup;
};

export const signin = async (email, password) => {
    const response = await graphqlClient.query({
        query: gql`
        query AUTH_SIGNIN($email: String!, $password: String!)
            {
                signin(email: $email, password: $password) {
                    userId
                    email
                    token
                    tokenExpiration
                }
            }
        `,
        variables: {
            email,
            password
        }
    });

    return response.data.signin;
}


export const verifyEmail = async (email) => {
    const response = await graphqlClient.query({
        query: gql`
            mutation EMAIL_CONFIRMATION($email: String!) {
                verifyEmail(email: $email)
            }
        `,
        variables: {
            email
        }
    });

    return response.data.verifyEmail;
};
