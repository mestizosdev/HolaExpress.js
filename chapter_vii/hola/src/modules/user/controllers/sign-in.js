/** @module user/controllers/sign-in */

const userService = require('../services')
const { validationResult } = require('express-validator')
const jwt = require('jsonwebtoken')
const WarnMessage = require('../../../utils/warn-message')
const ErrorMessage = require('../../../utils/error-message')
const passwordUtil = require('../../../utils/password')
const Content = require('../../../utils/content')

/**
 * @name signIn user
 * @path {POST} /signin
 */
exports.signIn = async (req, res) => {
  // #swagger.tags = ['User']
  const errors = validationResult(req)

  if (!errors.isEmpty()) {
    return res.status(422).json(
      new WarnMessage(
        'Validation error', __filename, Content.loadErrors(errors)
      ).show()
    )
  }

  const { username, password } = req.body

  const user = await userService.getByUsername(username)

  if (!user) {
    return res.status(404).json(
      new WarnMessage('Invalid credentials', __filename).show()
    )
  }

  const isMatch = await passwordUtil.compare(password, user.password)

  if (!isMatch) {
    return res.status(404).json(
      new WarnMessage('Invalid credentials', __filename).show()
    )
  }

  try {
    const token = jwt.sign(
      {
        username: user.username
      }
      , process.env.JWT_SECRET, {
        expiresIn: process.env.JWT_EXPIRE
      })

    return res.status(200).json({
      token
    })
  } catch (error) {
    return res.status(501).json(
      new ErrorMessage(
        'JWT error', __filename, Content.loadError(error)
      ).show()
    )
  }
}
