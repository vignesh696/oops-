import React from 'react';
import './App.css';
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
        <WorldBankWidget />
        <HRWidget />
        <RedditWidget />
        <StocksWidget />
        <WeatherWidget />
        <EconomicsWidget />
      </div>
    </div>
  );
}

export default App;