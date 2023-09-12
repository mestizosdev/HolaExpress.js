const { signUp } = require('./sign-up')
const { list } = require('./get-users')
const { update } = require('./update-user')
const { remove } = require('./remove-user')

module.exports = { signUp, list, update, remove }
