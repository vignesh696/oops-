import React from 'react';
import './App.css';
import CryptoWidget from './CryptoWidget';
import FXWidget from './FXWidget';
import HackerNewsWidget from './HackerNewsWidget';
import AirQualityWidget from './AirQualityWidget';
import WHOWidget from './WHOWidget';

function App() {
  return (
    <div className="app">
      <header className="header">
        <h1>🏢 Operations Dashboard</h1>
        <p>Live data from 25 sources</p>
      </header>
      <div className="dashboard-grid">
        <CryptoWidget />
        <FXWidget />
        <HackerNewsWidget />
        <AirQualityWidget />
        <WHOWidget />
        <div className="widget">
          <h2>🌍 World Bank</h2>
          <p>Coming soon...</p>
        </div>
      </div>
    </div>
  );
}

export default App;