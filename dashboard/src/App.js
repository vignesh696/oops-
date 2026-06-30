import React, { useState } from 'react';
import './App.css';
import Login from './Login';
import CryptoWidget from './CryptoWidget';
import FXWidget from './FXWidget';
import HackerNewsWidget from './HackerNewsWidget';
import AirQualityWidget from './AirQualityWidget';
import WHOWidget from './WHOWidget';
import WorldBankWidget from './WorldBankWidget';
import HRWidget from './HRWidget';
import RedditWidget from './RedditWidget';
import StocksWidget from './StocksWidget';
import WeatherWidget from './WeatherWidget';
import EconomicsWidget from './EconomicsWidget';

function App() {
  const [role, setRole] = useState(null);
  const [email, setEmail] = useState('');

  const handleLogin = (userRole, userEmail) => {
    setRole(userRole);
    setEmail(userEmail);
  };

  const handleLogout = () => {
    localStorage.clear();
    setRole(null);
    setEmail('');
  };

  if (!role) {
    return <Login onLogin={handleLogin} />;
  }

  return (
    <div className="app">
      <header className="header">
        <h1>🏢 Operations Dashboard</h1>
        <div style={{display:'flex', justifyContent:'center', alignItems:'center', gap:'20px'}}>
          <p>Live data from 25 sources</p>
          <p style={{color:'#38bdf8'}}>👤 {email} ({role})</p>
          <button
            onClick={handleLogout}
            style={{
              padding:'5px 15px',
              backgroundColor:'#ef4444',
              color:'white',
              border:'none',
              borderRadius:'5px',
              cursor:'pointer'
            }}>
            Logout
          </button>
        </div>
      </header>

      <div className="dashboard-grid">
        <CryptoWidget />
        <FXWidget />
        <HackerNewsWidget />
        <AirQualityWidget />
        <WeatherWidget />
        <EconomicsWidget />
        <StocksWidget />
        <RedditWidget />
        {role === 'founder' && <WHOWidget />}
        {role === 'founder' && <WorldBankWidget />}
        {role === 'founder' && <HRWidget />}
      </div>
    </div>
  );
}

export default App;