/** @module version/services/version */
const db = require('../../../models')
const { QueryTypes } = require('sequelize')
const ErrorMessage = require('../../../utils/error-message')
const Content = require('../../../utils/content')
/**
 * Get version
 *
 * @async
 * @returns {Version} version
*/
exports.getVersion = async () => {
  const version = await db.sequelize
    .query('SELECT versiono() as version_database', {
      type: QueryTypes.SELECT
    }).catch((error) => {
      throw new ErrorMessage(
        'Database error',
        __filename,
        Content.load([error.message, error.sql])
      )
    })

  if (version.length > 0) {
    return version[0]
  }
}
