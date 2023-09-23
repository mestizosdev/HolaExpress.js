const swaggerAutogen = require('swagger-autogen')({ openapi: '3.0.0' })
const dotenv = require('dotenv')
const path = require('path')
const pkg = require('../package.json')

dotenv.config({ path: path.join(__dirname, '/config/config.env') })

const PORT = process.env.PORT

const doc = {
  info: {
    version: pkg.version,
    title: 'HolaExpress.js'
  },
  components: {
    securitySchemes: {
      bearerAuth: {
        type: 'http',
        scheme: 'bearer'
      }
    }
  },
  host: `localhost:${PORT}`
}

const outputFile = 'src/modules/swagger/swagger.json'
const endpointsFiles = [
  'src/modules/ping/routes.js',
  'src/modules/version/routes.js',
  'src/modules/user/routes.js'
]

swaggerAutogen(outputFile, endpointsFiles, doc)
