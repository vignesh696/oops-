import React, { useState, useEffect } from 'react';

function WHOWidget() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [lastUpdated, setLastUpdated] = useState('');

  useEffect(() => {
    fetch('https://ghoapi.azureedge.net/api/NCDMORT3070')
      .then(res => res.json())
      .then(json => {
        console.log('WHO data:', json);
        setData(json.value.slice(0, 4));
        setLastUpdated(new Date().toLocaleTimeString());
        setLoading(false);
      })
      .catch(err => {
        console.error('WHO error:', err);
        setLoading(false);
      });
  }, []);

  return (
    <div className="widget">
      <h2>🏥 WHO Health</h2>
      {loading ? (
        <p>Loading...</p>
      ) : data && data.length > 0 ? (
        <div>
          {data.map((item, index) => (
            <p key={index}>
              📅 {item.TimeDim}: <strong>{item.NumericValue ? item.NumericValue.toFixed(1) + '%' : 'N/A'}</strong>
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

export default WHOWidget;