import React from 'react'


const Home = () => {
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
      <div class="input-field">
        <h3>Weight</h3>
        <input type="number" placeholder="Weight"/>
      </div>
      <div class="input-field">
        <h3>Volume</h3>
        <input type="number" placeholder="Volume"/>
      </div>
      <div class="input-field">
        <h3>Cooling</h3>
        <div id="cool">
          <input type="checkbox"/>
        </div>
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
export default Home