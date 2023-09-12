/** @module user/services/update-user */
const passwordUtil = require('../../../utils/password')

/**
 * Update user
 *
 * @async
 * @param {User} userToUpdate - Current user to update
 * @param {User} userWithNewData - User with new data
 * @returns {User}
 */
exports.update = async (userToUpdate, userWithNewData) => {
  return await userToUpdate.update({
    username: userWithNewData.username,
    email: userWithNewData.email,
    password: await passwordUtil.encrypt(userWithNewData.password),
    status: userWithNewData.status
  })
}
