# Swagger

## Swagger UI Express
```
pnpm add -D swagger-ui-express
```
## swagger-autogen
```
pnpm add -D swagger-autogen
```
## Add swagger.js
```
const swaggerAutogen = require('swagger-autogen')({ openapi: '3.0.0' })
const dotenv = require('dotenv')
const path = require('path')

dotenv.config({ path: path.join(__dirname, '/config/config.env') })

const PORT = process.env.PORT

const doc = {
  info: {
    version: '1.0.0',
    title: 'Overlord.js'
  },
  host: `localhost:${PORT}`
}

const outputFile = '../swagger.json'
const endpointsFiles = ['src/modules/ping/routes.js', 'src/modules/version/routes.js']

swaggerAutogen(outputFile, endpointsFiles, doc)
```
## Add jsdoc command to package.json
```
"scripts": {
    "dev": "nodemon src/index.js",
    "lint": "standard src --fix",
    "doc": "jsdoc -c jsdoc.json",
    "swagger": "node src/swagger.js"
  },
```
## Add swagger tag documentation in controllers
```
pnpm run swagger
```
## Run
```
pnpm run dev
```