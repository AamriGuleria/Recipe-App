import "./Auth.css"
import React, { useState } from 'react';
import { auth } from './firebase';
import { signInWithEmailAndPassword } from 'firebase/auth';
const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      await signInWithEmailAndPassword(auth,email, password);
      const user = auth.currentUser; // Get the current user
      if (user) {
        const idToken = await user.getIdToken(); // Get the ID token
        console.log('ID Token:', idToken);
        alert('User logged in successfully');
        window.location.href = "/main";
      }
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <div className="Auth">
    <form onSubmit={handleLogin}>
      <h1>Login</h1>
      <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email..."/>
      <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password..."/>
      <button type="submit">Login</button>
    </form>
    </div>
  );
};

export default Login;
