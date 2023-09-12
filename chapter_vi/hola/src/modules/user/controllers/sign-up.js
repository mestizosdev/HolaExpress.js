/** @module user/controllers/sign-up */

const userService = require('../services')
const validate = require('./helpers/is-username-or-email-register')
const WarnMessage = require('../../../utils/warn-message')
const { validationResult } = require('express-validator')
const Content = require('../../../utils/content')

/**
 * @name signUp user
 * @path {POST} /signup
 */
exports.signUp = async (req, res) => {
  // #swagger.tags = ['User']
  const errors = validationResult(req)

  if (!errors.isEmpty()) {
    const warn = new WarnMessage(
      'Validation error',
      __filename,
      Content.loadErrors(errors)
    )
    return res.status(422).json(
      warn.show()
    )
  }

  const { username, email, password } = req.body

  const isExist = await validate.isUsernameOrEmailRegister(
    username, email
  )

  if (isExist.exist) {
    const warn = new WarnMessage(isExist.message, __filename)
    return res.status(404).json(
      warn.show()
    )
  }

  const user = await userService.create(
    { username, email, password }
  )

  res.status(200).json({
    username: user.username,
    email: user.email,
    createdAt: user.createdAt,
    status: user.status
  })
}
