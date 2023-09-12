/** @module module/controllers/get-users */
const userService = require('../services')

/**
 * @name Get users
 * @path {GET} /users
*/
exports.list = async (req, res) => {
  // #swagger.tags = ['User']

  const users = await userService.getUsers()

  return res.status(200).json({
    data: users
  })
}
