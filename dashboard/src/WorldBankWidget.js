import React, { useState, useEffect } from 'react';

function WorldBankWidget() {
  const [gdp, setGdp] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('https://api.worldbank.org/v2/country/IND/indicator/NY.GDP.MKTP.CD?format=json&mrv=3')
      .then(res => res.json())
      .then(data => {
        var records = data[1].filter(d => d.value !== null);
        setGdp(records);
        setLoading(false);
      })
      .catch(err => {
        setLoading(false);
      });
  }, []);

  return (
    <div className="widget">
      <h2>🌍 World Bank — India GDP</h2>
      {loading ? (
        <p>Loading...</p>
      ) : gdp ? (
        <div>
          {gdp.map(item => (
            <p key={item.date}>
              📅 {item.date}: <strong>${(item.value / 1e12).toFixed(2)}T</strong>
            </p>
          ))}
          <p className="last-updated">World Bank Data</p>
        </div>
      ) : (
        <p>Failed to load</p>
      )}
    </div>
  );
}

export default WorldBankWidget;