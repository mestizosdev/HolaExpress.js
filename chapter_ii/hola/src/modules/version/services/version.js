const db = require('../../../models')
const { QueryTypes } = require('sequelize')
const ErrorMessage = require('../../../utils/error-message')

exports.getVersion = async () => {
  const version = await db.sequelize
    .query('SELECT versiono() as version_database', {
      type: QueryTypes.SELECT
    }).catch((error) => {
      console.log(error.constructor.name)
      console.error('DatabaseError:', error.message, error.sql)
      throw new ErrorMessage(
        'Database error',
        error.message + ' | ' + error.sql,
        __filename
      )
    })

  if (version) {
    if (version.length > 0) { return version[0] }
  }
}
