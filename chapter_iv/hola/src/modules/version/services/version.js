/** @module version/services/version */
const db = require('../../../models')
const { QueryTypes } = require('sequelize')
const ErrorMessage = require('../../../utils/error-message')

/**
 * Get version
 *
 * @async
 * @returns {Version} version
*/
exports.getVersion = async () => {
  const version = await db.sequelize
    .query('SELECT version() as version_database', {
      type: QueryTypes.SELECT
    }).catch((error) => {
      throw new ErrorMessage(
        'Database error', error.message + ' | ' + error.sql, __filename
      )
    })

  if (version.length > 0) {
    return version[0]
  }
}
