/** @module utils/error-message */
const logger = require('./logger')

class ErrorMessage extends Error {
  /**
     * @constructs
     * @param {string} message
     * @param {string} filename
     * @param {Content[]} content
     */
  constructor (message, filename, content = []) {
    super(message)
    this.content = content
    this.filename = filename

    logger.error(` 
    Message: ${this.message}.  
    Filename: ${this.filename}
    Content: ${JSON.stringify(this.content)}`)
  }

  show () {
    return {
      message: this.message,
      content: this.content
    }
  }
}

module.exports = ErrorMessage
