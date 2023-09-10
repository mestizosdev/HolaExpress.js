/** @module util/password */
const bcrypt = require('bcrypt')

const minCharacters = 10

/**
 * Encrypt password
 * @async
 * @param {string} password
 * @returns {string}
*/
module.exports.encrypt = (password) => {
  const salt = bcrypt.genSaltSync(minCharacters)
  const encryptedPassword = bcrypt.hash(password, salt)

  return encryptedPassword
}
