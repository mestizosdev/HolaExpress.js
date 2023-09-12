/** @module user/controllers/update-user */
const { validationResult } = require('express-validator')

const userService = require('../services')
const WarnMessage = require('../../../utils/warn-message')
const Content = require('../../../utils/content')

/**
 * @name Update user
 * @path {PUT} /overlord/v1/user/:id
*/
exports.update = async (req, res) => {
  // #swagger.tags = ['User']
  const errors = validationResult(req)

  if (!errors.isEmpty()) {
    return res.status(422).json(
      new WarnMessage(
        'Validation error', __filename, Content.loadError(errors)
      ).show()
    )
  }

  const user = await userService.getById(req.params.id)

  if (!user) {
    return res.status(404).json(
      new WarnMessage('User don\'t exist', __filename).show()
    )
  }

  const { username, email, password, status } = req.body

  if (user.username !== username) {
    const exist = await userService.getByUsername(username)

    if (exist) {
      return res.status(404).json(
        new WarnMessage(`The username ${username} already exist`, __filename).show()
      )
    }
  }

  if (user.email !== email) {
    const exist = await userService.getByEmail(email)

    if (exist) {
      return res.status(404).json(
        new WarnMessage(`The email ${email} already exist`, __filename).show()
      )
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
