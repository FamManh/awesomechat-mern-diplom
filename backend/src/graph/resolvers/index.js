const authResolver = require('./auth')
const contactResolver = require('./contact')

module.exports = {
    ...authResolver,
    ...contactResolver
};
