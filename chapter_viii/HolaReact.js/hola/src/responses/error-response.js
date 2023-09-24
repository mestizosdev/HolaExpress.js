import Content from './content'

class ErrorResponse {
  message = ''
  content = new Content()

  constructor(data) {
    Object.assign(this, data)
  }
}

export default ErrorResponse
