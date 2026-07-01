import React from 'react';

function StockChart() {
  const stocks = [
    { symbol: 'AAPL', price: 281.74, change: -0.72 },
    { symbol: 'GOOGL', price: 178.32, change: 1.23 },
    { symbol: 'MSFT', price: 415.20, change: 0.54 },
    { symbol: 'AMZN', price: 192.45, change: -0.31 },
    { symbol: 'TSLA', price: 248.50, change: 2.15 },
    { symbol: 'META', price: 534.20, change: 0.87 },
  ];

  return (
    <div className="widget">
      <h2>📊 Stock Chart</h2>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
        {stocks.map(stock => (
          <div key={stock.symbol} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '10px', backgroundColor: '#0f172a', borderRadius: '8px' }}>
            <span style={{ color: '#e2e8f0', fontWeight: 'bold', width: '60px' }}>{stock.symbol}</span>
            <div style={{ flex: 1, margin: '0 15px', backgroundColor: '#1e293b', borderRadius: '4px', height: '8px' }}>
              <div style={{ width: `${Math.min((stock.price / 600) * 100, 100)}%`, height: '8px', backgroundColor: stock.change >= 0 ? '#22c55e' : '#ef4444', borderRadius: '4px' }} />
            </div>
            <span style={{ color: '#38bdf8', width: '70px', textAlign: 'right' }}>${stock.price}</span>
            <span style={{ color: stock.change >= 0 ? '#22c55e' : '#ef4444', width: '60px', textAlign: 'right', fontSize: '12px' }}>
              {stock.change >= 0 ? '+' : ''}{stock.change}%
            </span>
          </div>
        ))}
      </div>
      <p className="last-updated">Mock data — upgrade Alpha Vantage for live charts</p>
    </div>
  );
}

export default StockChart;