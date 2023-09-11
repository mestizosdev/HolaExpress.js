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
/*
// Promise.allSettled -> wait for resolve all promises
async function isUsernameOrEmailRegister (username, email) {
  const start = performance.now()

  const existRecord = await Promise.allSettled([
    userService.getByUsername(username),
    userService.getByEmail(email)
  ]).then(values => {
    console.log(values)
    if (values[0].value) {
      return {
        exist: true,
        message: `The username ${username} already exist`
      }
    } else if (values[1].value) {
      return {
        exist: true,
        message: `The email ${email} already exist`
      }
    } else {
      return { exist: false, message: '' }
    }
  })

  const end = performance.now()
  console.log(`Call to execute isUsernameOrEmailRegister took ${end - start} milliseconds`)

  return existRecord
}
*/
