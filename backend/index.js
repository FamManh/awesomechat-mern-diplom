const express = require('express');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const graphHttp = require('express-graphql');
const connectDB = require('./src/config/connectDB');
const graphqlSchema = require('./src/graph/schema')
const graphqlResolvers = require('./src/graph/resolvers')
const isAuth = require('./src/middleware/isAuth')
const verifyAccount = require('./src/controllers/verifyAccount')
require('dotenv').config();

// init express app
const app = express();


// middleware
app.use(bodyParser.json());
app.use(cookieParser());

app.use((req, res, next) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Access-Control-Allow-Methods", "POST,GET,OPTIONS");
    res.setHeader(
        "Access-Control-Allow-Headers",
        "Content-Type, Authorization"
    );
    if (req.method === "OPTIONS") {
        return res.sendStatus(200);
    }
    next();
});

// authentication
app.use(isAuth);

// set locale
app.use( (req, res, next)=>{
    req.language = 'en';
    return next();
})

// verify account
app.get("/verify/:verifyToken", verifyAccount);

// graphql
app.use(
    "/graphql",
    graphHttp(req => ({
        schema: graphqlSchema,
        rootValue: graphqlResolvers,
        graphiql: true,
        customFormatErrorFn: error=> {
            return {
                message: error.message,
                code: error.originalError && error.originalError.code,
                locations: error.locations,
                path: error.path
            };
        }
    }))
);

// connect to mongodb
connectDB();

const port = process.env.APP_PORT;
app.listen(port, () => {
    console.log(`Server is running on port ${port}`)
})
