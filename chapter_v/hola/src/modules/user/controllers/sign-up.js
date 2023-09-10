/** @module user/controllers/create-user */

const userService = require('../services')
const passwordUtil = require('../../../utils/password')
const validate = require('./helpers/is-username-or-email-register')

/**
 * @name Create user
 * @path {POST} /overlord/v1/user
 */
exports.signUp = async (req, res) => {
  // #swagger.tags = ['User']

  const { username, email, password } = req.body

  const isUserOrEmailExist = await validate.isUsernameOrEmailRegister(
    username, email
    )

  if (isUserOrEmailExist.exist) {
    return res.status(404).json(
      { message: 'User already exist' }
    )
  }

  // Conditional operator or ternary operator
  // condition ? expression if true : expression if false
  const passwordToSave = (typeof password !== 'undefined' &&
    password !== null)
    ? password
    : passwordUtil.generate()

  const user = await userService.create(
    { username, email, password: passwordToSave }
  )

  res.status(200).json({
    username: user.username,
    email: user.email,
    createdAt: user.createdAt,
    status: user.status
  })
}
