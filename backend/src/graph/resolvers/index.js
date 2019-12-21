const authResolver = require('./auth')
const userResolver = require('./user')

module.exports = {
    ...authResolver,
    ...userResolver
}
