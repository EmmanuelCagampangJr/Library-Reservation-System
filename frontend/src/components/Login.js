import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';

function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    const user = JSON.parse(localStorage.getItem('user'));
    if (user && user.username === username && user.password === password) {
      localStorage.setItem('isLoggedIn', 'true');
      alert('Login successful!');
      navigate('/');
    } else {
      alert('Invalid credentials');
    }
  };

  return (
    <div style={{
      minHeight: '100vh',
      background: 'linear-gradient(135deg, #800000 0%, #b22222 100%)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      fontFamily: 'Segoe UI, Arial, sans-serif',
    }}>
      <div style={{
        background: '#fff',
        borderRadius: '16px',
        boxShadow: '0 8px 32px rgba(128,0,0,0.13)',
        padding: '40px 36px 30px 36px',
        minWidth: '340px',
        maxWidth: '90vw',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      }}>
        <img src="/book.png" alt="Book Logo" style={{ height: '50px', marginBottom: '10px' }} />
        <h2 style={{ color: '#800000', marginBottom: '18px', fontWeight: 'bold', letterSpacing: '1px' }}>Login</h2>
        <form onSubmit={handleLogin} style={{ width: '100%' }}>
          <input type="text" placeholder="Username" value={username}
            onChange={(e) => setUsername(e.target.value)} required
            style={{
              width: '95%',
              padding: '10px',
              borderRadius: '6px',
              border: '1px solid #ccc',
              marginBottom: '16px',
              fontSize: '1rem',
            }}
          />
          <input type="password" placeholder="Password" value={password}
            onChange={(e) => setPassword(e.target.value)} required
            style={{
              width: '95%',
              padding: '10px',
              borderRadius: '6px',
              border: '1px solid #ccc',
              marginBottom: '22px',
              fontSize: '1rem',
            }}
          />
          <button type="submit" style={{
            width: '95%',
            background: 'linear-gradient(90deg, #800000 0%, #b22222 100%)',
            color: '#fff',
            border: 'none',
            borderRadius: '6px',
            padding: '12px',
            fontWeight: 'bold',
            fontSize: '1.1rem',
            cursor: 'pointer',
            marginBottom: '10px',
            boxShadow: '0 2px 8px rgba(128,0,0,0.08)'
          }}>Login</button>
        </form>
        <p style={{ marginTop: '10px', color: '#444' }}>
          Don't have an account? <Link to="/signup" style={{ color: '#b22222', fontWeight: 'bold', textDecoration: 'none' }}>Sign up</Link>
        </p>
      </div>
    </div>
  );
}

export default Login;
