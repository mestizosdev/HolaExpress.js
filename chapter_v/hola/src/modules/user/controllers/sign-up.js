/** @module user/controllers/sign-up */

const userService = require('../services')
const validate = require('./helpers/is-username-or-email-register')
const WarnMessage = require('../../../utils/warn-message')

/**
 * @name signUp user
 * @path {POST} /signup
 */
exports.signUp = async (req, res) => {
  // #swagger.tags = ['User']

  const { username, email, password } = req.body

  const isUserOrEmailExist = await validate.isUsernameOrEmailRegister(
    username, email
  )

  if (isUserOrEmailExist.exist) {
    const warn = new WarnMessage(isUserOrEmailExist.message, '', __filename)
    return res.status(404).json(
      warn.message
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
