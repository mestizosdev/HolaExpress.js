const express = require('express')
const dotenv = require('dotenv')
const path = require('path')
const morgan = require('morgan')
const cors = require('cors')

const routes = require('./routes')
const { swaggerDocs } = require('./modules/swagger/routes')

dotenv.config({ path: path.join(__dirname, '/config/config.env') })

const server = express()

const PORT = process.env.PORT
const ENV = process.env.NODE_ENV

if (ENV === 'development') {
  server.use(morgan('dev'))
  swaggerDocs(server)
}

server.use(express.json()) // body parser
server.use(cors())
for (const route in routes) {
  server.use(routes[route])
}

server.listen(PORT, () => {
  console.log(
    `Server running in ${ENV} mode on port ${PORT}`
  )
})
