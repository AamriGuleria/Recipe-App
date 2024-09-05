import React, { useState } from 'react';
import { auth } from './firebase';
import { createUserWithEmailAndPassword, } from 'firebase/auth';
import "./Auth.css"
import { Link } from 'react-router-dom';
const Signup = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSignup = async (e) => {
    e.preventDefault(); // Prevents the default behavior of a form submission
    try {
      await createUserWithEmailAndPassword(auth,email, password);
      const user = auth.currentUser;
      console.log(user)
      if (user) {
        const idToken = await user.getIdToken();
        console.log('ID Token:', idToken);
        alert('User signed up successfully');
      }
    } catch (error) {
      // Checks if the email already exists, if it is then navigate to login page
        if(error.code==="auth/email-already-in-use"){
            window.location.href="/login"
        }
      alert(error.message);
    }
  };

  return (
    <div className="Auth">
      <form onSubmit={handleSignup}>
        <h1>SIGN UP</h1>
        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email..." />
        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password..." />
        <div className="button-container">
          <button type="submit">Sign Up</button>
          <Link to="/login" className="Link">Login</Link>
        </div>
      </form>
    </div>
  );
};

export default Signup;