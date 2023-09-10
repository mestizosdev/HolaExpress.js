/** @module utils/warn-message */
const logger = require('./logger')

class WarnMessage extends Error {
  constructor (message, content, filename) {
    super(message)
    this.content = content
    this.filename = filename

    logger.warn(` 
          Message: ${this.message}. 
          Content: ${this.content}. 
          Filename: ${this.filename}
          `)
  }
}

module.exports = WarnMessage
