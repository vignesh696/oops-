import React, { useState, useEffect } from 'react';

function EconomicsWidget() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('http://localhost:5000/api/economics')
      .then(res => res.json())
      .then(json => {
        console.log('Economics:', json);
        setData(json.observations);
        setLoading(false);
      })
      .catch(err => {
        console.error('Economics error:', err);
        setLoading(false);
      });
  }, []);

  return (
    <div className="widget">
      <h2>📊 CPI — US Economics</h2>
      {loading ? (
        <p>Loading...</p>
      ) : data ? (
        <div>
          {data.slice(0, 4).map((item, i) => (
            <p key={i}>
              📅 {item.date}: <strong>{item.value}</strong>
            </p>
          ))}
          <p className="last-updated">FRED Economic Data</p>
        </div>
      ) : (
        <p>Failed to load</p>
      )}
    </div>
  );
}

export default EconomicsWidget;