/** @module user/services/create-user */
const db = require('../../../models')
const passwordUtil = require('../../../utils/password')

/**
 * Create user
 *
 * @async
 * @param {User} userNew - User to create
 * @returns {User} user
 */
exports.create = async (userNew) => {
  const user = db.User.build({
    username: userNew.username,
    email: userNew.email.toLowerCase(),
    password: await passwordUtil.encrypt(userNew.password),
    role: userNew.role
  })

  return await user.save()
}
