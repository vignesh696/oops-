import React from 'react';

function SportsWidget() {
  const matches = [
    { league: 'IPL', home: 'MI', away: 'CSK', score: '185/4 vs 142/6', status: 'MI won by 43 runs' },
    { league: 'EPL', home: 'Arsenal', away: 'Chelsea', score: '2 - 1', status: 'Full Time' },
    { league: 'NBA', home: 'Lakers', away: 'Warriors', score: '112 - 108', status: 'Final' },
    { league: 'LaLiga', home: 'Barcelona', away: 'Real Madrid', score: '3 - 2', status: 'Full Time' },
    { league: 'NFL', home: 'Chiefs', away: 'Eagles', score: '28 - 24', status: 'Final' },
  ];

  return (
    <div className="widget">
      <h2>⚽ Live Sports Scores</h2>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
        {matches.map((match, i) => (
          <div key={i} style={{ padding: '12px', backgroundColor: '#0f172a', borderRadius: '8px', borderLeft: '3px solid #38bdf8' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <span style={{ color: '#64748b', fontSize: '11px' }}>{match.league}</span>
              <span style={{ color: '#22c55e', fontSize: '11px' }}>{match.status}</span>
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '6px' }}>
              <span style={{ color: '#e2e8f0', fontWeight: 'bold' }}>{match.home}</span>
              <span style={{ color: '#38bdf8' }}>{match.score}</span>
              <span style={{ color: '#e2e8f0', fontWeight: 'bold' }}>{match.away}</span>
            </div>
          </div>
        ))}
      </div>
      <p className="last-updated">Mock data — connect SportRadar API for live scores</p>
    </div>
  );
}

export default SportsWidget;