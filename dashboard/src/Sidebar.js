import React, { useState } from 'react';
import './App.css';
import Login from './Login';
import Sidebar from './Sidebar';
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

const widgetMap = {
  crypto: <CryptoWidget />,
  fx: <FXWidget />,
  news: <HackerNewsWidget />,
  air: <AirQualityWidget />,
  weather: <WeatherWidget />,
  economics: <EconomicsWidget />,
  stocks: <StocksWidget />,
  reddit: <RedditWidget />,
  who: <WHOWidget />,
  worldbank: <WorldBankWidget />,
  hr: <HRWidget />,
};

function App() {
  const [role, setRole] = useState(null);
  const [email, setEmail] = useState('');
  const [active, setActive] = useState('crypto');

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
    <div style={{ display: 'flex', minHeight: '100vh', backgroundColor: '#0f172a' }}>
      <Sidebar active={active} setActive={setActive} role={role} />
      <div style={{ marginLeft: '220px', flex: 1, padding: '30px' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '30px' }}>
          <h1 style={{ color: '#38bdf8', margin: 0 }}>🏢 Operations Dashboard</h1>
          <div style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
            <span style={{ color: '#94a3b8', fontSize: '13px' }}>👤 {email} ({role})</span>
            <button
              onClick={handleLogout}
              style={{
                padding: '6px 16px',
                backgroundColor: '#ef4444',
                color: 'white',
                border: 'none',
                borderRadius: '5px',
                cursor: 'pointer',
                fontSize: '13px'
              }}>
              Logout
            </button>
          </div>
        </div>
        <div style={{ maxWidth: '800px' }}>
          {widgetMap[active]}
        </div>
      </div>
    </div>
  );
}

export default App;