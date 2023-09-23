const { Router } = require('express')
const router = Router()
const { getVersion } = require('./controllers/version')
const { checkJwt } = require('../../middlewares/check-jwt')
const { checkRole } = require('../../middlewares/check-role')

router.get('/version', [checkJwt, checkRole(['Administrator', 'Manager'])], getVersion)

module.exports = router
