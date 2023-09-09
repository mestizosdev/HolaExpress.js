const { Router } = require('express')
const router = Router()

router.get('/ping', (req, res) => {
  // #swagger.description = 'Ping'
  // #swagger.tags = ['Ping']
  res.status(200).json(
    {
      message: 'pong'
    }
  )
})

module.exports = router
