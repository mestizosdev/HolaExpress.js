/** @module module/controllers/get-users */
const userService = require('../services')

/**
 * @name list users
 * @path {GET} /users
*/
exports.list = async (req, res) => {
  // ##swagger.security = [{"bearerAuth": []}]
  // #swagger.tags = ['User']

  const users = await userService.getAll()

  return res.status(200).json({
    data: users
  })
}
