class Content {
  /**
     * @constructs
     * @param {string} field
     * @param {string} value
     * @param {string} message
     */
  constructor (field = '', value = '', message = '') {
    this.field = field
    this.value = value
    this.message = message
  }

  /**
  * @param {string[]} messages
  * @returns {Content[]} content
  */
  static load (messages) {
    const content = []

    messages.forEach((message) =>
      content.push(new Content('', '', message))
    )
    return content
  }

  /**
  * @param {ValidationError} error
  * @returns {Content[]} content
  */
  static loadError (error) {
    const content = []

    error.array().forEach((e) => {
      if (e.path === 'password') {
        content.push(new Content(e.path, '', e.msg))
      } else {
        content.push(new Content(e.path, e.value, e.msg))
      }
    }
    )
    return content
  }

  /**
  * @param {string} message
  * @returns {Content[]} content
  */
  static loadMessage (message) {
    const content = []
    content.push(new Content('', '', message))
    return content
  }
}

module.exports = Content
