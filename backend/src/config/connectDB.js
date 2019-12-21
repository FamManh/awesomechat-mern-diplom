const mongoose = require('mongoose');

let connectDB = () => {

    let {DB_CONNECTION, DB_HOST, DB_PORT, DB_NAME, DB_USERNAME, DB_PASSWORD} = process.env;
    
    let URI = `${DB_CONNECTION}://${DB_HOST}:${DB_PORT}/${DB_NAME}`;
    
    return mongoose.connect(URI, {useNewUrlParser: true})
}

module.exports = connectDB;
