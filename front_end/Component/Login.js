import React ,{useState} from 'react'
const Login =() =>{

const[email ,setEmail] = useState("");


const [password, setPassword] = useState("");
const [newEntry, setAllEntry] =useState([]);
const submitForm = (e) =>{
    e.preventDefault()
    const newEntry = {email: email, password: password };
  setAllEntry([...setAllEntry, newEntry]);
  console.log(allEntry);
}
return (
    <>

<form action=""  onSubmit={submitForm}>

<div>

<label htmlFor="email">Email</label>

<input type="text" name="email" id="email" autocomplete="off"

value={email}

onChange={(e) =>setEmail(e.target.value)}
/>

</div>

<div>

<label htmlFor="password">Password</label>

<input type="password" name="password" id="password" autocomplete="off"
 value={password}
  onChange={(e)=>setPassword(e.target.value)}
  />

</div>

<button type="submit">Login</button>
</form>
</>
)
}