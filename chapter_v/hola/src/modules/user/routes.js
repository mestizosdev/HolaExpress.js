const express = require('express')
const router = express.Router()

const { signUp, list, update } = require('./controllers/index')

router.get('/users', list)
router.put('/user/:id', update)
router.post('/signup', signUp)

module.exports = router
