import React, { useState, useEffect } from 'react';

function FXWidget() {
  const [rates, setRates] = useState(null);
  const [loading, setLoading] = useState(true);
  const [lastUpdated, setLastUpdated] = useState('');

  useEffect(() => {
    fetch('https://api.frankfurter.dev/v1/latest?from=USD&to=EUR,GBP,INR,JPY')
      .then(res => res.json())
      .then(data => {
        console.log('FX data:', data);
        setRates(data.rates);
        setLastUpdated(new Date().toLocaleTimeString());
        setLoading(false);
      })
      .catch(err => {
        console.error('FX error:', err);
        setLoading(false);
      });
  }, []);

  return (
    <div className="widget">
      <h2>💱 FX Rates</h2>
      {loading ? (
        <p>Loading...</p>
      ) : rates ? (
        <div>
          <p>🇪🇺 EUR: <strong>{rates.EUR}</strong></p>
          <p>🇬🇧 GBP: <strong>{rates.GBP}</strong></p>
          <p>🇮🇳 INR: <strong>{rates.INR}</strong></p>
          <p>🇯🇵 JPY: <strong>{rates.JPY}</strong></p>
          <p className="last-updated">Last updated: {lastUpdated}</p>
        </div>
      ) : (
        <p>Failed to load</p>
      )}
    </div>
  );
}

export default FXWidget;