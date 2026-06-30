import React, { useState, useEffect } from 'react';

function StocksWidget() {
  const [stock, setStock] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
   fetch('https://operations-dashboard-backend.onrender.com/api/stocks')
      .then(res => res.json())
      .then(data => {
        console.log('Stocks data:', data);
        if (data && data['Global Quote']) {
          setStock(data['Global Quote']);
        }
        setLoading(false);
      })
      .catch(err => {
        console.error('Stocks error:', err);
        setLoading(false);
      });
  }, []);

  return (
    <div className="widget">
      <h2>📈 Stock Prices</h2>
      {loading ? (
        <p>Loading...</p>
      ) : stock ? (
        <div>
          <p>🍎 AAPL: <strong>${stock['05. price']}</strong></p>
          <p style={{color: parseFloat(stock['09. change']) < 0 ? '#ef4444' : '#22c55e'}}>
            Change: {stock['09. change']} ({stock['10. change percent']})
          </p>
          <p className="last-updated">Last traded: {stock['07. latest trading day']}</p>
        </div>
      ) : (
        <p>Failed to load</p>
      )}
    </div>
  );
}

export default StocksWidget;