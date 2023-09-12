/** @module user/services/get-users */
const db = require('../../../models')

/**
 * Get users
 *
 * @async
 * @returns {User[]} user[]
*/
exports.getUsers = async () => {
  const users = await db.User.findAll()

  return users
}
