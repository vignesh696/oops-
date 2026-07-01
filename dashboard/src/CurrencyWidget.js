import React, { useState } from 'react';

function CurrencyWidget() {
  const [amount, setAmount] = useState(1);
  const [from, setFrom] = useState('USD');
  const [to, setTo] = useState('INR');

  const rates = {
    USD: 1,
    INR: 84.55,
    EUR: 0.87,
    GBP: 0.75,
    JPY: 162.44,
    AUD: 1.54,
    CAD: 1.36,
    SGD: 1.34,
  };

  const converted = ((amount * rates[to]) / rates[from]).toFixed(2);
  const currencies = Object.keys(rates);

  return (
    <div className="widget">
      <h2>🌍 Currency Converter</h2>
      <div style={{ display: 'flex', gap: '10px', alignItems: 'center', flexWrap: 'wrap' }}>
        <input
          type="number"
          value={amount}
          onChange={e => setAmount(e.target.value)}
          style={{ padding: '8px', backgroundColor: '#0f172a', border: '1px solid #334155', borderRadius: '5px', color: '#e2e8f0', width: '100px', fontSize: '14px' }}
        />
        <select
          value={from}
          onChange={e => setFrom(e.target.value)}
          style={{ padding: '8px', backgroundColor: '#0f172a', border: '1px solid #334155', borderRadius: '5px', color: '#e2e8f0', fontSize: '14px' }}>
          {currencies.map(c => <option key={c}>{c}</option>)}
        </select>
        <span style={{ color: '#64748b' }}>→</span>
        <select
          value={to}
          onChange={e => setTo(e.target.value)}
          style={{ padding: '8px', backgroundColor: '#0f172a', border: '1px solid #334155', borderRadius: '5px', color: '#e2e8f0', fontSize: '14px' }}>
          {currencies.map(c => <option key={c}>{c}</option>)}
        </select>
      </div>
      <p style={{ fontSize: '28px', fontWeight: 'bold', color: '#38bdf8', marginTop: '20px' }}>
        {amount} {from} = {converted} {to}
      </p>
      <p className="last-updated">Static rates — for live rates upgrade Alpha Vantage</p>
    </div>
  );
}

export default CurrencyWidget;