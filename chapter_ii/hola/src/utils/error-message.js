class ErrorMessage extends Error {
  constructor (message, content, filename) {
    super(message)
    this.content = content
    this.filename = filename
  }
}

module.exports = ErrorMessage
