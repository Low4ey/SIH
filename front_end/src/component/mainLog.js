import React from 'react'
import { useState } from 'react'
import Login from './login'
import Signup from './signup'

const MainLog = () => {
    const [isLogin, setisLogin] = useState(true);
    const setLogin=()=>{
        setisLogin(!isLogin)
    }
  return (<>
    {isLogin?<button onClick={setLogin} >Sign Up</button>:<button onClick={setLogin} >Log In</button>}
        {isLogin?<Login />:<Signup/>}
        </>
  )
}

export default MainLog