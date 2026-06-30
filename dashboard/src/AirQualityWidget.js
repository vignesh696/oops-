import React, { useState, useEffect } from 'react';

function AirQualityWidget() {
  const [airData, setAirData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [lastUpdated, setLastUpdated] = useState('');

  useEffect(() => {
    fetch('https://air-quality-api.open-meteo.com/v1/air-quality?latitude=17.385&longitude=78.4867&current=pm2_5,pm10,ozone')
      .then(res => res.json())
      .then(data => {
        console.log('Air quality data:', data);
        setAirData(data.current);
        setLastUpdated(new Date().toLocaleTimeString());
        setLoading(false);
      })
      .catch(err => {
        console.error('Air quality error:', err);
        setLoading(false);
      });
  }, []);

  const getAQIStatus = (pm25) => {
    if (pm25 <= 12) return { text: 'Good ✅', color: '#22c55e' };
    if (pm25 <= 35) return { text: 'Moderate ⚠️', color: '#eab308' };
    if (pm25 <= 55) return { text: 'Unhealthy 🔴', color: '#ef4444' };
    return { text: 'Dangerous ☠️', color: '#dc2626' };
  };

  return (
    <div className="widget">
      <h2>🌬️ Air Quality — Hyderabad</h2>
      {loading ? (
        <p>Loading...</p>
      ) : airData ? (
        <div>
          <p>PM2.5: <strong>{airData.pm2_5} µg/m³</strong></p>
          <p>PM10: <strong>{airData.pm10} µg/m³</strong></p>
          <p>Ozone: <strong>{airData.ozone} µg/m³</strong></p>
          <p>Status: <strong style={{color: getAQIStatus(airData.pm2_5).color}}>
            {getAQIStatus(airData.pm2_5).text}
          </strong></p>
          <p className="last-updated">Last updated: {lastUpdated}</p>
        </div>
      ) : (
        <p>Failed to load</p>
      )}
    </div>
  );
}

export default AirQualityWidget;