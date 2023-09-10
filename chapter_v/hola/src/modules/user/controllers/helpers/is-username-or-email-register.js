/** @module controllers/helpers/isUsernameOrEmailRegister */
const userService = require('../../services')

async function isUsernameOrEmailRegister (username, email) {
  let exist = await userService.getByUsername(username)

  if (exist) {
    return {
      exist: true,
      message: `The username ${username} already exist`
    }
  }

  exist = await userService.getByEmail(email)

  if (exist) {
    return {
      exist: true,
      message: `The email ${email} already exist`
    }
  }

  return { exist: false, message: '' }
}

module.exports.isUsernameOrEmailRegister = isUsernameOrEmailRegister
