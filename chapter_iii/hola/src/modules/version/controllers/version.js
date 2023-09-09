const versionService = require('../services/version')
const os = require('os')
const pkg = require('../../../../package.json')
const ErrorMessage = require('../../../utils/error-message')

exports.getVersion = async (req, res) => {
  try {
    const version = await versionService.getVersion()

    res.json({
      application: {
        name: 'HolaExpress.js',
        author: pkg.author,
        version: pkg.version,
        versionOS: os.platform() + ' ' + os.release() + ' ' + os.arch(),
        versionDatabase: version.version_database,
        versionNode: process.version
      }
    })
  } catch (e) {
    const error = new ErrorMessage(e.message, e.content, __filename)
    return res.status(503).json(
      error.message
    )
  }
}
