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
}

module.exports = Content
