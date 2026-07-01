import React, { useState, useEffect } from 'react';

function AstronomyWidget() {
  const [phase, setPhase] = useState('');
  const [emoji, setEmoji] = useState('');

  useEffect(() => {
    const now = new Date();
    const known = new Date('2000-01-06');
    const diff = (now - known) / (1000 * 60 * 60 * 24);
    const cycle = diff % 29.53;

    let p, e;
    if (cycle < 1.85) { p = 'New Moon'; e = '🌑'; }
    else if (cycle < 7.38) { p = 'Waxing Crescent'; e = '🌒'; }
    else if (cycle < 9.22) { p = 'First Quarter'; e = '🌓'; }
    else if (cycle < 14.77) { p = 'Waxing Gibbous'; e = '🌔'; }
    else if (cycle < 16.61) { p = 'Full Moon'; e = '🌕'; }
    else if (cycle < 22.15) { p = 'Waning Gibbous'; e = '🌖'; }
    else if (cycle < 23.99) { p = 'Last Quarter'; e = '🌗'; }
    else { p = 'Waning Crescent'; e = '🌘'; }

    setPhase(p);
    setEmoji(e);
  }, []);

  const planets = [
    { name: 'Mercury', distance: '77M km', visible: false },
    { name: 'Venus', distance: '261M km', visible: true },
    { name: 'Mars', distance: '225M km', visible: true },
    { name: 'Jupiter', distance: '628M km', visible: true },
    { name: 'Saturn', distance: '1.2B km', visible: false },
  ];

  return (
    <div className="widget">
      <h2>🌙 Astronomy</h2>
      <div style={{ textAlign: 'center', padding: '20px 0' }}>
        <span style={{ fontSize: '64px' }}>{emoji}</span>
        <p style={{ fontSize: '20px', color: '#38bdf8', marginTop: '10px' }}>{phase}</p>
      </div>
      <h3 style={{ color: '#64748b', fontSize: '13px', marginBottom: '10px' }}>PLANET VISIBILITY TONIGHT</h3>
      {planets.map(planet => (
        <div key={planet.name} style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '8px' }}>
          <span style={{ color: '#e2e8f0' }}>{planet.name}</span>
          <span style={{ color: '#64748b', fontSize: '12px' }}>{planet.distance}</span>
          <span style={{ color: planet.visible ? '#22c55e' : '#ef4444', fontSize: '12px' }}>
            {planet.visible ? '✅ Visible' : '❌ Not visible'}
          </span>
        </div>
      ))}
      <p className="last-updated">Moon phase calculated astronomically</p>
    </div>
  );
}

export default AstronomyWidget;