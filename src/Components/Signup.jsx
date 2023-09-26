import React, { useState } from 'react'
import axios from 'axios'
function Signup() {
    const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
    const handleSignup = (e)=>{
        e.preventDefault()
        let obj = {
            email : email,
            password : password
        }
        axios.post('http://localhost:5000/users',obj)
        .then((res)=>{
            alert("User Registered Successfully")
        })
        .catch((err)=>{
            console.log(err)
        })
    }
  return (
    <div>
     <h2>Signup Page</h2>
      <form onSubmit={handleSignup}>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit">Signup</button>
      </form>
    </div>
  )
}

export default Signup