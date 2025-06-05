import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './components/login.css'; // Assuming you have a CSS file for styling

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    // TODO: connect with backend login API
    console.log('Email:', email, 'Password:', password);
    navigate('./components/Dashboard'); // redirect after "login"
  };

  return (
    <div className="login-container">
      <h2>Sign In</h2>
      <form onSubmit={handleLogin}>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required />
        <button type="submit">Login</button>
      </form>
    </div>
  );
}

export default Login;
