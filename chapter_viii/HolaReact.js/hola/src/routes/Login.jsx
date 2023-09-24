export default function Login() {
    return (
        <form>
        <h1>Login</h1>
        <label>Username</label>
        <input
          name="username"
          type="text"
        />
        <label>Password</label>
        <input
          type="password"
          name="password"
        />
        <button>Login</button>
      </form>
    )
}