import React from 'react'

const Signup = () => {
  return (
    <>
    <div class="Signup-form">
  <form>
    <h1>Create a new Account</h1>
    <div class="content">
      <div class="input">
      <input type="username" placeholder="Username" autocomplete="nope" />
      </div>
      <div class="input">
        
        <input type="email" placeholder="Email" autocomplete="nope" />
      </div>
      <div class="input">
        <input type="password" placeholder="Password" autocomplete="new-password" />
      </div>
      
    </div>
    <div class="signup">
      
      <button>signup</button>
    </div>
  </form>
</div>
    
  

  </>
  )
}

export default Signup