const express = require('express')
const dotenv = require('dotenv')
const path = require('path')
const morgan = require('morgan')

dotenv.config({ path: path.join(__dirname, '/config/config.env') })

const server = express()

if (process.env.NODE_ENV === 'development') {
  server.use(morgan('dev'))
}

server.use(require('./modules/ping/routes'))

const PORT = process.env.PORT

server.listen(PORT, () => {
  console.log(
    `Server running on port ${PORT}`
  )
})
