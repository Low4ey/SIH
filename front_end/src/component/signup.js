import React from 'react'

const Signup = () => {
  return (
<form action="/signup" method="post">
      <label htmlFor="email">Email:</label>
      <input type="email" id="email" name="email" />
      <br />
      <label htmlFor="username">Username:</label>
      <input type="text" id="username" name="username" />
      <br />
      <label htmlFor="password">Password:</label>
      <input type="password" id="password" name="password" />
      <br />
      <button type="submit">Sign up</button>
    </form>
  )
}

export default Signup