/** @module user/controllers/update-user */
const { validationResult } = require('express-validator')

const userService = require('../services')
// const ErrorMessage = require('../../../utils/error-message')

/**
 * @name Update user
 * @path {PUT} /overlord/v1/user/:id
*/
exports.update = async (req, res) => {
  // #swagger.tags = ['User']
  const errors = validationResult(req)

  if (!errors.isEmpty()) {
    return res.status(422).json(
      errors
    )
  }

  const user = await userService.getById(req.params.id)

  if (!user) {
    return res.status(404).json({
      message: 'User don\'t exist'
    })
  }

  const { username, email, password, status } = req.body

  if (user.username !== username) {
    const exist = await userService.getByUsername(username)

    if (exist) {
      return res.status(404).json({
        message: `The username ${username} already exist`
      })
    }
  }

  if (user.email !== email) {
    const exist = await userService.getByEmail(email)

    if (exist) {
      return res.status(404).json({
        message: `The email ${email} already exist`
      })
    }
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
