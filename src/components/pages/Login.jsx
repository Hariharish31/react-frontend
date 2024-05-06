// import React,{useState} from 'react'
// import { useNavigate } from 'react-router-dom';
// export const Login = (props) => {
//   const [email,setEmail]=useState('');
//   const [pass,setPass]=useState('');

//   const handleSubmit = (e) => {
//     e.preventDefault();
//      console.log(email);
//   }
//  const Navigate = useNavigate();
//   return (
//     <div className='auth-form-container' >
//     <form  className='login-form' onSubmit={handleSubmit} >
//         <label for="email">Email</label>
//        <input value={email} onChange={(e) => setEmail(e.target.value)}type='email' placeholder='youremail@gmail.com' id='email' name='email'/>
//         <label for="password">Password</label>
//        <input  value={pass} onChange={(e) => setPass(e.target.value)} type='password' placeholder='Type your password' id='password' name='password'/>
//        <button type='submit' onClick={()=>Navigate('/')}>Log In</button>
//     </form>
//     <button  className='link-btn' onClick={() => props.onFormSwitch('register')} >Don't have an account? Register here.</button>
//     </div>
//   )
// }

import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

export const Login = (props) => {
  const [email, setEmail] = useState('');
  const [pass, setPass] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('/', {
        email: email,
        password: pass
      });

      console.log(response.data); // Assuming the response contains some data
      navigate('/'); // Redirect to home page or any other page after successful login
    } catch (error) {
      console.error('Login error:', error);
      // Handle login error, e.g., show error message to the user
    }
  };

  return (
    <div className='auth-form-container'>
      <form className='login-form' onSubmit={handleSubmit}>
        <label htmlFor="email">Email</label>
        <input value={email} onChange={(e) => setEmail(e.target.value)} type='email' placeholder='youremail@gmail.com' id='email' name='email'/>
        <label htmlFor="password">Password</label>
        <input value={pass} onChange={(e) => setPass(e.target.value)} type='password' placeholder='Type your password' id='password' name='password'/>
        <button type='submit' onClick={()=>navigate('/')}>Log In</button>
      </form>
      <button className='link-btn' onClick={() => props.onFormSwitch('register')}>Don't have an account? Register here.</button>
    </div>
  );
};
