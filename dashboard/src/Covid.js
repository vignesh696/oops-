import React from 'react';

function Covid() {
  const data = [
    { country: 'India', cases: '45.0M', deaths: '533K', recovered: '44.5M' },
    { country: 'USA', cases: '103.8M', deaths: '1.1M', recovered: '101.2M' },
    { country: 'Brazil', cases: '37.7M', deaths: '711K', recovered: '37.0M' },
    { country: 'France', cases: '38.9M', deaths: '167K', recovered: '38.7M' },
    { country: 'Global', cases: '704M', deaths: '7.0M', recovered: '675M' },
  ];

  return (
    <div className="widget">
      <h2>🌐 COVID-19 Health Tracker</h2>
      <div style={{ overflowX: 'auto' }}>
        <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '13px' }}>
          <thead>
            <tr style={{ borderBottom: '1px solid #334155' }}>
              <th style={{ color: '#64748b', padding: '8px', textAlign: 'left' }}>Country</th>
              <th style={{ color: '#64748b', padding: '8px', textAlign: 'right' }}>Cases</th>
              <th style={{ color: '#ef4444', padding: '8px', textAlign: 'right' }}>Deaths</th>
              <th style={{ color: '#22c55e', padding: '8px', textAlign: 'right' }}>Recovered</th>
            </tr>
          </thead>
          <tbody>
            {data.map(row => (
              <tr key={row.country} style={{ borderBottom: '1px solid #1e293b' }}>
                <td style={{ color: '#e2e8f0', padding: '8px' }}>{row.country}</td>
                <td style={{ color: '#38bdf8', padding: '8px', textAlign: 'right' }}>{row.cases}</td>
                <td style={{ color: '#ef4444', padding: '8px', textAlign: 'right' }}>{row.deaths}</td>
                <td style={{ color: '#22c55e', padding: '8px', textAlign: 'right' }}>{row.recovered}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <p className="last-updated">WHO cumulative data as of 2024</p>
    </div>
  );
}

export default Covid;