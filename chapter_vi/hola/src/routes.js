const ping = require('./modules/ping/routes')
const version = require('./modules/version/routes')
const user = require('./modules/user/routes')

module.exports = {
  ping,
  version,
  user
}
