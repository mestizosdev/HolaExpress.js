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

    let str = ''
    if (this.content.length > 0) {
      str += 'Content:\n'
      this.content.forEach((c) => {
        str += `    ${c.field} ${c.value} ${c.message}\n`
      })
    }

    logger.error(` 
    Message: ${this.message}.  
    Filename: ${this.filename}
    ${str}`)
  }

  show () {
    return {
      message: this.message,
      content: this.content
    }
  }
}

module.exports = ErrorMessage
