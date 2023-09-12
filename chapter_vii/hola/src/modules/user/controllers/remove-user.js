/** @module user/controllers/remove-user */
const { validationResult } = require('express-validator')

const userService = require('../services')
const WarnMessage = require('../../../utils/warn-message')
const Content = require('../../../utils/content')

/**
 * @name Delete user
 * @path {DELETE} /overlord/v1/user/:id
*/
exports.remove = async (req, res) => {
  // #swagger.tags = ['User']
  const errors = validationResult(req)

  if (!errors.isEmpty()) {
    return res.status(422).json(
      new WarnMessage('Validation error', __filename, Content.loadError(errors))
        .show()
    )
  }

  const user = await userService.getById(req.params.id)

  if (!user) {
    return res.status(404).json(
      new WarnMessage('User don\'t exist', __filename).show()
    )
  }

  await userService.remove(user)

  return res.status(200).json({
    id: user.id,
    description: user.username
  })
}
