const express = require('express');
const bodyParser = require('body-parser');
const graphHttp = require('express-graphql');
const connectDB = require('./src/config/connectDB');

const graphqlSchema = require('./src/graph/schema')
const graphqlResolvers = require('./src/graph/resolvers')

require('dotenv').config();

// init express app
const app = express();


// middleware
app.use(bodyParser.json());


// graphql
app.use("/graphql",
    graphHttp({
        schema: graphqlSchema,
        rootValue: graphqlResolvers,
        graphiql: true
    })    
)

// connect to mongodb
connectDB();

const port = process.env.APP_PORT;
console.log(port)
app.listen(port, () => {
    console.log(`Server is running on port ${port}`)
})
