const { signUp } = require('./sign-up')
const { signIn } = require('./sign-in')
const { list } = require('./get-user')
const { update } = require('./update-user')
const { remove } = require('./remove-user')

module.exports = { signUp, signIn, list, update, remove }
