import React, { useState } from 'react';
import { auth } from './firebase';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import "./Auth.css"
import Login from "./Login"
import { Link } from 'react-router-dom';
const Signup = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSignup = async (e) => {
    e.preventDefault();
    try {
      await createUserWithEmailAndPassword(auth,email, password);
      const user = auth.currentUser;
      if (user) {
        const idToken = await user.getIdToken();
        console.log('ID Token:', idToken);
        alert('User signed up successfully');
      }
    } catch (error) {
        if(error.code==="auth/email-already-in-use"){
            window.location.href="/login"
        }
      alert(error.message);
    }
  };

  return (
    <div className="Auth">
    <form onSubmit={handleSignup}>
      <h1>Sign Up</h1>
      <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email..."/>
      <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password..."/>
      <button type="submit">Sign Up</button>
      <Link to="/login" className='Link'>Login</Link>
    </form>
    </div>
  );
};

export default Signup;