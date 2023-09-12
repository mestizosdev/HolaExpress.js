const express = require('express')
const router = express.Router()

const { signUp, list, update, remove } = require('./controllers/index')

router.get('/users', list)
router.put('/user/:id', update)
router.post('/signup', signUp)
router.delete('/user/:id', remove)

module.exports = router
