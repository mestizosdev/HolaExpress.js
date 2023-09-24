import { useState } from 'react'
import { useAuth } from '../auth/AuthProvider'
import { Navigate } from 'react-router-dom'
import ErrorResponse from '../responses/error-response'

export default function Signup() {
  const [username, setUsername] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [errorResponse, setErrorResponse] = useState('')

  const auth = useAuth()

  async function handleSubmit(e) {
    e.preventDefault()

    try {
      const response = await fetch('http://localhost:3000/signup', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          username,
          email,
          password
        })
      })

      if (response.ok) {
        console.log('User created')
        setErrorResponse('')
      } else {
        console.log('User nor created')
        const error = new ErrorResponse(await response.json())
        console.log(error)
        setErrorResponse(error.message)
      }
    } catch (error) {
      console.log(error)
    }
  }

  if (auth.isAuthenticated) {
    return <Navigate to="/dashboard" />
  }

  return (
    <form onSubmit={handleSubmit}>
      <h1>Login</h1>
      {!!errorResponse && <div>{errorResponse}</div>}

      <label>Username</label>
      <input
        name="username"
        type="text"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />

      <label>Email</label>
      <input
        name="email"
        type="text"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />

      <label>Password</label>
      <input
        type="password"
        name="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />

      <button>Sign up</button>
    </form>
  )
}
