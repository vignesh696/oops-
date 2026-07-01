import React, { useState } from 'react';

function Login({ onLogin }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleLogin = () => {
    setLoading(true);
    setError('');
    fetch('https://ops-dashboard-backend-vignesh.onrender.com/api/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email, password })
    })
      .then(res => res.json())
      .then(data => {
        if (data.token) {
          localStorage.setItem('token', data.token);
          localStorage.setItem('role', data.role);
          localStorage.setItem('email', data.email);
          onLogin(data.role, data.email);
        } else {
          setError('Invalid email or password');
        }
        setLoading(false);
      })
      .catch(err => {
        setError('Failed to connect to server');
        setLoading(false);
      });
  };

  return (
    <div style={{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      height: '100vh',
      backgroundColor: '#0f172a'
    }}>
      <div style={{
        backgroundColor: '#1e293b',
        padding: '40px',
        borderRadius: '10px',
        border: '1px solid #334155',
        width: '350px'
      }}>
        <h1 style={{color: '#38bdf8', marginBottom: '10px', textAlign: 'center'}}>
          🏢 Operations Dashboard
        </h1>
        <p style={{color: '#94a3b8', textAlign: 'center', marginBottom: '30px'}}>
          Sign in to continue
        </p>

        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={e => setEmail(e.target.value)}
          style={{
            width: '100%',
            padding: '10px',
            marginBottom: '15px',
            backgroundColor: '#0f172a',
            border: '1px solid #334155',
            borderRadius: '5px',
            color: '#e2e8f0',
            fontSize: '14px'
          }}
        />

        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={e => setPassword(e.target.value)}
          style={{
            width: '100%',
            padding: '10px',
            marginBottom: '15px',
            backgroundColor: '#0f172a',
            border: '1px solid #334155',
            borderRadius: '5px',
            color: '#e2e8f0',
            fontSize: '14px'
          }}
        />

        {error && <p style={{color: '#ef4444', marginBottom: '10px'}}>{error}</p>}

        <button
          onClick={handleLogin}
          disabled={loading}
          style={{
            width: '100%',
            padding: '10px',
            backgroundColor: '#38bdf8',
            color: '#0f172a',
            border: 'none',
            borderRadius: '5px',
            fontSize: '16px',
            fontWeight: 'bold',
            cursor: 'pointer'
          }}>
          {loading ? 'Signing in...' : 'Sign In'}
        </button>

        <div style={{marginTop: '20px', color: '#64748b', fontSize: '12px'}}>
          <p>👤 Founder: founder@dashboard.com / founder123</p>
          <p>👤 Analyst: analyst@dashboard.com / analyst123</p>
        </div>
      </div>
    </div>
  );
}

export default Login;