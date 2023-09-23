const userService = require('../modules/user/services')
const WarnMessage = require('../utils/warn-message')

exports.checkRole = (roles) => {
  return async (req, res, next) => {
    // Get the username from previous midleware
    const username = res.locals.jwtPayload.username

    const user = await userService.getByUsername(username)

    // Check if array of authorized roles includes the user's role
    const existRoleInRoles = roles.indexOf(user.role) > -1
    if (!existRoleInRoles) {
      return res.status(401).json(
        new WarnMessage('Not authorized', __filename).show()
      )
    }

    // Call the next middleware or controller
    next()
  }
}
