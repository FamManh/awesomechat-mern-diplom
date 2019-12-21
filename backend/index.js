const express = require('express');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const graphHttp = require('express-graphql');
const i18n = require('i18n');
const connectDB = require('./src/config/connectDB');

const graphqlSchema = require('./src/graph/schema')
const graphqlResolvers = require('./src/graph/resolvers')
console.log(__dirname)
require('dotenv').config();

// init express app
const app = express();


// config i18n

i18n.configure({
    locales: ["en", "ru", "vn"],
    register: global,
    directory: __dirname + "/locales",
    cookie: "awesomechat-lang",
    
});



// middleware
app.use(bodyParser.json());
app.use(cookieParser());
app.use(i18n.init)


// set local
app.get('/:locale', (req, res, next)=>{
    res.cookie('locale', req.params.locale);
    res.redirect(req.headers.referer);
})

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
