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
server.use(require('./modules/version/routes'))

const PORT = process.env.PORT

server.listen(PORT, () => {
  console.log(
    `Server running in ${process.env.NODE_ENV} mode on port ${PORT}`
  )
})
