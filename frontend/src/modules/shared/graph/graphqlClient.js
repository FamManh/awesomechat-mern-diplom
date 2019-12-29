// import { getLanguageCode } from 'i18n';
import {setContext} from 'apollo-link-context';
import {RetryLink} from 'apollo-link-retry';
import {createHttpLink} from 'apollo-link-http';
import {ApolloClient} from 'apollo-client';
import {InMemoryCache} from 'apollo-cache-inmemory';

const retryLink = new RetryLink({
    attempts: {
        max: 2
    }
});

const authLink = setContext((_, {headers}) => {
    let token =
        "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI1ZTAxMzE4YWU4MmJmYTYyNTM5ZjQyODgiLCJpYXQiOjE1NzczMDE5OTAsImV4cCI6MTU3NzMwNTU5MH0.vQq-xfMsg4Y8bka0md7igsYA9fE21cqjXi6AsGdpQl0";
    
    return {
        headers: {
            ...headers,
            authorization: token ? `Bearer ${token}` : "",
            // "Accept-Language": getLanguageCode()
        }
    };
})

console.log(process.env.REACT_APP_AWSOMECHAT_BACKEND);

const httpLink = createHttpLink({
    uri: "http://localhost:5411/graphql"
});

const defaultOptions = {
    query: {
        fetchPolicy: "no-cache",
        errorPolicy: "all"
    }
};

const graphqlClient = new ApolloClient({
    link: retryLink.concat(authLink.concat(httpLink)),
    cache: new InMemoryCache({
        addTypename: false
    }),
    defaultOptions: defaultOptions
});


export default graphqlClient;
