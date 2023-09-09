# Documentation with JSDoc

## JSDoc
An API documentation generator for JavaScript. 
```
pnpm add -D jsdoc
```
## jsdoc-http-plugin
An API documentation generator for JavaScript. 
```
pnpm add -D jsdoc-http-plugin
```
## Add jsdoc.json
```
touch jsdoc.json
```
## Add theme
```
pnpm add -D docdash
```
## Add jsdoc command to package.json
```
"scripts": {
    "dev": "nodemon src/index.js",
    "lint": "standard src --fix",
    "doc": "jsdoc -c jsdoc.json"
  },
```
```
pnpm run doc
```
## Run
```
pnpm run dev
```