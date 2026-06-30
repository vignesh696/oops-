import React, { useState, useEffect } from 'react';

function WorldBankWidget() {
  const [gdpData, setGdpData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [lastUpdated, setLastUpdated] = useState('');

  useEffect(() => {
    fetch('https://api.worldbank.org/v2/country/IND/indicator/NY.GDP.MKTP.CD?format=json&mrv=5')
      .then(res => res.json())
      .then(data => {
        console.log('World Bank data:', data);
        const records = data[1].filter(d => d.value !== null);
        setGdpData(records);
        setLastUpdated(new Date().toLocaleTimeString());
        setLoading(false);
      })
      .catch(err => {
        console.error('World Bank error:', err);
        setLoading(false);
      });
  }, []);

  const formatTrillions = (value) => {
    return (value / 1e12).toFixed(2) + 'T';
  };

  return (
    <div className="widget">
      <h2>🌍 India GDP — World Bank</h2>
      {loading ? (
        <p>Loading...</p>
      ) : gdpData ? (
        <div>
          {gdpData.slice(0, 4).map(item => (
            <p key={item.date}>
              📅 {item.date}: <strong>${formatTrillions(item.value)}</strong>
            </p>
          ))}
          <p className="last-updated">Last updated: {lastUpdated}</p>
        </div>
      ) : (
        <p>Failed to load</p>
      )}
    </div>
  );
}

export default WorldBankWidget;