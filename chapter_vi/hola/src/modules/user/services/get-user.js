/** @module user/services/user */
const db = require('../../../models')

/**
 * Get user by email
 *
 * @async
 * @param {string} email - Username
 * @returns {User} user
*/
exports.getByEmail = async (email) => {
  const user = await db.User.findOne({
    where: { email }
  })

  if (user) {
    return user
  }
}

/**
 * Get user
 *
 * @async
 * @param {number} getById - User Id
 * @returns {User} user
*/
exports.getById = async (userId) => {
  const user = await db.User.findOne({
    where: { id: userId }
  })

  if (user) {
    return user
  }
}

/**
 * Get user by username
 *
 * @async
 * @param {string} username - Username
 * @returns {User} user
*/
exports.getByUsername = async (username) => {
  const user = await db.User.findOne({
    where: { username }
  })

  if (user) {
    return user
  }
}

/**
 * Get users
 *
 * @async
 * @returns {User[]} user[]
*/
exports.getAll = async () => {
  const users = await db.User.findAll()

  return users
}
