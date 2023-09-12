/** @module utils/error-message */
const logger = require('./logger')

class ErrorMessage extends Error {
  constructor (message, content, filename) {
    super(message)
    this.content = content
    this.filename = filename

    logger.error(` 
          Message: ${this.message}. 
          Content: ${this.content}. 
          Filename: ${this.filename}
          `)
  }
}

module.exports = ErrorMessage
