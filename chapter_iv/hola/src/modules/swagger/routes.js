const swaggerUI = require('swagger-ui-express')
const swaggerJson = require('./swagger.json')

const swaggerDocs = (app, port) => {
  app.use('/swagger', swaggerUI.serve, swaggerUI.setup(swaggerJson))
}

module.exports = { swaggerDocs }
