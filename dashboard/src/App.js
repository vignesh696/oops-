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
import CalendarWidget from './CalendarWidget';
import CurrencyWidget from './CurrencyWidget';
import StockChart from './StockChart';
import SportsWidget from './SportsWidget';
import AstronomyWidget from './AstronomyWidget';
import Covid from './Covid';

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

  const allTabs = [
    { id: 'crypto', label: '💰 Crypto' },
    { id: 'fx', label: '💱 FX Rates' },
    { id: 'news', label: '📰 Hacker News' },
    { id: 'air', label: '🌬️ Air Quality' },
    { id: 'weather', label: '🌤️ Weather' },
    { id: 'economics', label: '📊 CPI' },
    { id: 'stocks', label: '📈 Stocks' },
    { id: 'reddit', label: '💬 Reddit' },
    { id: 'calendar', label: '🗓️ Calendar' },
    { id: 'currency', label: '💱 Currency' },
    { id: 'stockchart', label: '📊 Stock Chart' },
    { id: 'sports', label: '⚽ Sports' },
    { id: 'astronomy', label: '🌙 Astronomy' },
    { id: 'covid', label: '🌐 COVID-19' },
    { id: 'who', label: '🏥 WHO', founderOnly: true },
    { id: 'worldbank', label: '🌍 World Bank', founderOnly: true },
    { id: 'hr', label: '👥 HR Data', founderOnly: true },
  ];

  const tabs = allTabs.filter(t => !t.founderOnly || role === 'founder');

  const widgetMap = {
    crypto: <CryptoWidget />,
    fx: <FXWidget />,
    news: <HackerNewsWidget />,
    air: <AirQualityWidget />,
    weather: <WeatherWidget />,
    economics: <EconomicsWidget />,
    stocks: <StocksWidget />,
    reddit: <RedditWidget />,
    calendar: <CalendarWidget />,
    currency: <CurrencyWidget />,
    stockchart: <StockChart />,
    sports: <SportsWidget />,
    astronomy: <AstronomyWidget />,
    covid: <Covid />,
    who: <WHOWidget />,
    worldbank: <WorldBankWidget />,
    hr: <HRWidget />,
  };

  if (!role) {
    return <Login onLogin={handleLogin} />;
  }

  return (
    <div style={{ minHeight: '100vh', backgroundColor: '#0f172a', color: '#e2e8f0' }}>
      <div style={{ backgroundColor: '#1e293b', borderBottom: '1px solid #334155', padding: '12px 24px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <h1 style={{ color: '#38bdf8', fontSize: '18px', margin: 0 }}>🏢 Operations Dashboard</h1>
        <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
          <span style={{ color: '#94a3b8', fontSize: '13px' }}>👤 {email} ({role})</span>
          <button onClick={handleLogout} style={{ padding: '5px 14px', backgroundColor: '#ef4444', color: 'white', border: 'none', borderRadius: '5px', cursor: 'pointer', fontSize: '13px' }}>Logout</button>
        </div>
      </div>

      <div style={{ backgroundColor: '#1e293b', borderBottom: '1px solid #334155', padding: '0 24px', display: 'flex', overflowX: 'auto', gap: '4px' }}>
        {tabs.map(tab => (
          <button
            key={tab.id}
            onClick={() => setActive(tab.id)}
            style={{
              padding: '12px 16px',
              backgroundColor: 'transparent',
              border: 'none',
              borderBottom: active === tab.id ? '2px solid #38bdf8' : '2px solid transparent',
              color: active === tab.id ? '#38bdf8' : '#94a3b8',
              cursor: 'pointer',
              fontSize: '13px',
              whiteSpace: 'nowrap'
            }}>
            {tab.label}
          </button>
        ))}
      </div>

      <div style={{ padding: '30px 24px', maxWidth: '900px' }}>
        {widgetMap[active]}
      </div>
    </div>
  );
}

export default App;