import React from 'react'
import { useState } from 'react'
import Login from './login'
import Signup from './signup'
import "../style/Main.css"

const MainLog = () => {
    const [isLogin, setisLogin] = useState(true);
    const setLogin=()=>{
        setisLogin(!isLogin)
    }
  return (<>

    <div class="button">
    {isLogin?<button onClick={setLogin} >Sign Up</button>:<button onClick={setLogin} >Log In</button>}
    </div>
        {isLogin?<Login />:<Signup/>}
        </>
  )
}

export default MainLog