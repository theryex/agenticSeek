import React, { useState } from 'react';
import axios from 'axios';

let backendUrl = process.env.REACT_APP_BACKEND_URL || '';
if (backendUrl.startsWith('/')) {
  // No change needed
} else if (/^https?:\/\//i.test(backendUrl)) {
  // No change needed
} else if (backendUrl) {
  backendUrl = window.location.protocol + '//' + backendUrl;
}
const BACKEND_URL = backendUrl;

export const Login = ({ onLogin }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      await axios.post(`${BACKEND_URL}/login`, {}, {
        auth: {
          username,
          password,
        },
      });
      onLogin(username, password);
    } catch (err) {
      setError('Invalid username or password');
    }
  };

  return (
    <div className="login-container">
      <form onSubmit={handleLogin}>
        <h2>Login</h2>
        {error && <p className="error">{error}</p>}
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit">Login</button>
      </form>
    </div>
  );
};
