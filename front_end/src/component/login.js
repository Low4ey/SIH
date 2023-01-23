import React from 'react'


const Login = () => {
  return (
    <>
    <div class="login-form">
  <form>
    <h1>Login to your Account</h1>
    <div class="content">
      <div class="input-field">
        <input type="email" placeholder="Email" autocomplete="nope" />
      </div>
      <div class="input-field">
        <input type="password" placeholder="Password" autocomplete="new-password" />
      </div>
      <a href="#" class="link">Forgot Your Password?</a>
    </div>
    <div class="action">
      <button >Sign in</button>
    </div>
  </form>
</div>
    
  

  </>
  )
}

export default Login