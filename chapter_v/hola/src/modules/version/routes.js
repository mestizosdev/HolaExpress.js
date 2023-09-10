const { Router } = require('express')
const router = Router()
const { getVersion } = require('./controllers/version')

router.get('/version', getVersion)

module.exports = router
