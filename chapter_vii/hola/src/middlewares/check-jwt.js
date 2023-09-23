/** @module middlewares/check-jwt */

const jwt = require('jsonwebtoken')
const WarnMessage = require('../utils/warn-message')
const ErrorMessage = require('../utils/error-message')
const Content = require('../utils/content')

exports.checkJwt = (req, res, next) => {
  // Get the jwt token from the head
  const authHeader = req.headers.authorization
  const token = authHeader && authHeader.split(' ')[1]

  if (token == null) {
    return res.status(401).json(
      new WarnMessage('Not authorized', __filename).show()
    )
  }

  // Try to validate the token and get data
  let jwtPayload
  try {
    jwtPayload = jwt.verify(token, process.env.JWT_SECRET)
    res.locals.jwtPayload = jwtPayload
  } catch (error) {
    // If token is not valid, respond with 401 (unauthorized)
    console.log(error)
    return res.status(401).json(
      new ErrorMessage(
        'JWT error', __filename, Content.loadMessage(error.message)
      ).show()
    )
  }

  // The token is valid for 1 hour
  // We want to send a new token on every request
  const { username } = jwtPayload
  const newToken = jwt.sign({ username }, process.env.JWT_SECRET, {
    expiresIn: '1h'
  })
  res.setHeader('token', newToken)

  // Call the next middleware or controller
  next()
}
