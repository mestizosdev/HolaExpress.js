const express = require('express')
const dotenv = require('dotenv')
const path = require('path')
const morgan = require('morgan')

const routes = require('./routes')
const { swaggerDocs } = require('./modules/swagger/routes')

dotenv.config({ path: path.join(__dirname, '/config/config.env') })

const server = express()

if (process.env.NODE_ENV === 'development') {
  server.use(morgan('dev'))
}

for (const route in routes) {
  server.use(routes[route])
}

const PORT = process.env.PORT

server.listen(PORT, () => {
  console.log(
    `Server running in ${process.env.NODE_ENV} mode on port ${PORT}`
  )
  swaggerDocs(server, PORT)
})
