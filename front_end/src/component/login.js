import React from 'react'

const Login = () => {
  return (
    <form action="/login" method="fetch">
    <label htmlFor="username">Username:</label>
    <input type="text" id="username" name="username" />
    <br />
    <label htmlFor="password">Password:</label>
    <input type="password" id="password" name="password" />
    <br />
    <button type="submit">Log in</button>
  </form>
  )
}

export default Login