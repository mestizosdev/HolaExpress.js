import { useState } from 'react'
import { useAuth } from '../auth/AuthProvider'
import { Navigate } from 'react-router-dom'

export default function Login() {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const auth = useAuth()

  if (auth.isAuthenticated) {
    return <Navigate to="/dashboard" />
  }

  return (
    <form>
      <h1>Login</h1>

      <label>Username</label>
      <input
        name="username"
        type="text"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
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
