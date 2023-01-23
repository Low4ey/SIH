import React from 'react'


const Login = () => {
  return (
    <>
    <div class="destination">
  <form>
    <h1>Pinky Transportation</h1>
    <div class="content">
      <div class="input-field">
        <h3>From</h3>
        <input type="text" placeholder="Enter your location" autocomplete="nope" />
      </div>
      <div class="input-field">
        <h3>To</h3>
        <input type="text" placeholder="Enter your destination" autocomplete="nope" />
      </div>
      
    </div>
    <div class="search">
      
      <button >Find Best Route</button>
    </div>
  </form>
</div>
    

  </>
  )
}

export default Login