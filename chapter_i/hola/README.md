# First steps with Express and JavaScript

## Create project
```
pnpm init
```
## Express
Fast, unopinionated, minimalist web framework for Node.js.
```
pnpm add express
```
## Nodemon
```
pnpm add -D nodemon
```
- Add in package.json

```
"scripts": {
    "dev": "nodemon src/index.js"
	},
```
## Visual Studio Code
In Run and Debug icon create launch.json and add "program" option for debug
```
"program": "${workspaceFolder}/src/index.js"
```
## Basic code
```
const express = require('express')

const server = express()

server.get('/ping', (req, res) => {
  res.status(200).json(
    { message: 'pong' }
  )
})

server.listen(3000, () => {
  console.log(
    'Server running on port 3000'
  )
})

module.exports = server
```
## Standard
JavaScript Style Guide, with linter & automatic code fixer.
```
pnpm add -D standard
```
- Add in package.json
```
"scripts": {
    "dev": "nodemon src/index.js",
    "lint": "standard src --fix"
  },
```
## Dotenv 
Loads environment variables from .env for nodejs projects. 
```
pnpm add dotenv
```
- Create config folder and create config.env file
```
NODE_ENV=development
PORT=3000
``` 
## Morgan 
HTTP request logger middleware for node.js 
```
pnpm add -D morgan
```
## Run
```
pnpm run dev
```