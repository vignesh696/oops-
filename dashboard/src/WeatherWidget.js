import React, { useState, useEffect } from 'react';

function WeatherWidget() {
  const [weather, setWeather] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('https://operations-dashboard-backend.onrender.com/api/weather')
      .then(res => res.json())
      .then(data => {
        console.log('Weather:', data);
        setWeather(data);
        setLoading(false);
      })
      .catch(err => {
        console.error('Weather error:', err);
        setLoading(false);
      });
  }, []);

  return (
    <div className="widget">
      <h2>🌤️ Weather — Hyderabad</h2>
      {loading ? (
        <p>Loading...</p>
      ) : weather ? (
        <div>
          <p>🌡️ Temp: <strong>{weather.main.temp}°C</strong></p>
          <p>☁️ {weather.weather[0].description}</p>
          <p>💧 Humidity: <strong>{weather.main.humidity}%</strong></p>
          <p>💨 Wind: <strong>{weather.wind.speed} m/s</strong></p>
          <p className="last-updated">OpenWeatherMap</p>
        </div>
      ) : (
        <p>Failed to load</p>
      )}
    </div>
  );
}

export default WeatherWidget;