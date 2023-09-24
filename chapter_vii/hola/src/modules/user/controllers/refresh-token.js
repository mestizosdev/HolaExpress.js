/** @module module/controllers/refresh-token */

/**
 * @name refreshTokem token
 * @path {POST} /refresh-token
*/
exports.refreshToken = async (req, res) => {
  // #swagger.tags = ['User']

  return res.status(200).json({
    token: 'token'
  })
}
