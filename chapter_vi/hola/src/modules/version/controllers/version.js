/** @module version/controllers/version */
const versionService = require('../services/version')
const os = require('os')
const pkg = require('../../../../package.json')
const ErrorMessage = require('../../../utils/error-message')

/**
 * Get name application, database, os and node version
 * @name Get application version
 * @path {GET} /version
*/
exports.getVersion = async (req, res) => {
  // #swagger.description = 'Get name application, database, os and node version'
  // #swagger.tags = ['Version']
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
    const error = new ErrorMessage(e.message, __filename, [])
    return res.status(503).json(
      error.show()
    )
  }
}
