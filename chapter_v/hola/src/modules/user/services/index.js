const { create } = require('./create-user')
const { update } = require('./update-user')
const { getByUsername, getAll, getByEmail, getById } = require('./get-user')
const { remove } = require('./remove-user')

module.exports = {
  create,
  update,
  remove,
  getByUsername,
  getByEmail,
  getById,
  getAll
}
