import React from 'react';
import './App.css';
import CryptoWidget from './CryptoWidget';

function App() {
  return (
    <div className="app">
      <header className="header">
        <h1>🏢 Operations Dashboard</h1>
        <p>Live data from 25 sources</p>
      </header>

      <div className="dashboard-grid">
        <CryptoWidget />

        <div className="widget">
          <h2>💱 FX Rates</h2>
          <p>Loading...</p>
        </div>

        <div className="widget">
          <h2>🌍 World Bank</h2>
          <p>Loading...</p>
        </div>

        <div className="widget">
          <h2>📰 Hacker News</h2>
          <p>Loading...</p>
        </div>

        <div className="widget">
          <h2>🏥 WHO Health</h2>
          <p>Loading...</p>
        </div>

        <div className="widget">
          <h2>🌬️ Air Quality</h2>
          <p>Loading...</p>
        </div>
      </div>
    </div>
  );
}

export default App;