// src/Login.js
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import axios from 'axios';
import { loginUser } from '../Redux/action';
import { fetchingData } from '../Redux/productReducer/action';

const Login = () => {
  const dispatch = useDispatch();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const state = useSelector(state => state);
  console.log(state)
  const handleFetch = ()=>{
    dispatch(fetchingData)
  }
  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.get(`http://localhost:5000/users?email=${email}`);
      if (response.data.length > 0 && response.data[0].password === password) {
        dispatch(loginUser(response.data[0]));
        alert("Login Successfull")
      } else {
        alert('Invalid credentials');
      }
    } catch (error) {
      console.error('Error logging in:', error);
    }
  };

  return (
    <div>
      <h2>Login Page</h2>
      <form onSubmit={handleLogin}>
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
        <button type="submit">Login</button>
      </form>
      <button onClick={handleFetch}>FetchData</button>
    </div>
  );
};

export default Login;
