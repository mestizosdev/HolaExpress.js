const versionService = require('../services/version')

exports.getVersion = async (req, res) => {
  try {
    const version = await versionService.getVersion()

    res.json({
      application: {
        name: 'HolaExpress.js',
        versionDatabase: version.version_database,
        versionNode: process.version
      }
    })
  } catch (error) {
    return res.status(503).json(
      error.message
    )
  }
}
