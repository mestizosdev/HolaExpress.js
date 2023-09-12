/** @module utils/warn-message */
const ErrorMessage = require('./error-message')
const logger = require('./logger')

class WarnMessage extends ErrorMessage {
  /**
     * @constructs
     * @param {string} message
     * @param {string} filename
     * @param {Content[]} content
     */
  constructor (message, filename, content = []) {
    super(message, filename, content)

    logger.warn(` 
          Message: ${this.message}. 
          Filename: ${this.filename}
          Content: ${this.content}
          `)
  }
}

module.exports = WarnMessage
