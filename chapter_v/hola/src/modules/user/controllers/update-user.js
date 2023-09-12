/** @module user/controllers/update-user */
const userService = require('../services')
const register = require('./helpers/is-username-or-email-register')

/**
 * @name Update user
 * @path {PUT} /overlord/v1/user/:id
*/
exports.update = async (req, res) => {
  // #swagger.tags = ['User']

  const user = await userService.getById(req.params.id)

  if (!user) {
    return res.status(404).json({
      message: 'User don\'t exist'
    })
  }

  const { username, email, password, status } = req.body

  const isExist = await register.isUsernameOrEmailRegister(username, email)

  if (isExist.exist) {
    return res.status(404).json({
      message: isExist.message
    })
  }

  const userUpdated = await userService.update(
    user,
    { username, email, password, status }
  )

  res.status(200).json({
    id: userUpdated.id,
    username: userUpdated.username,
    email: userUpdated.email,
    createdAt: userUpdated.createdAt,
    status: userUpdated.status
  })
}
