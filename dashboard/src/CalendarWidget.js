import React, { useState, useEffect } from 'react';

function CalendarWidget() {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  const days = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];
  const months = ['January','February','March','April','May','June','July','August','September','October','November','December'];

  const day = days[time.getDay()];
  const month = months[time.getMonth()];
  const date = time.getDate();
  const year = time.getFullYear();
  const hours = String(time.getHours()).padStart(2, '0');
  const minutes = String(time.getMinutes()).padStart(2, '0');
  const seconds = String(time.getSeconds()).padStart(2, '0');

  return (
    <div className="widget">
      <h2>🗓️ Calendar & Time</h2>
      <p style={{ fontSize: '48px', fontWeight: 'bold', color: '#38bdf8', letterSpacing: '2px' }}>
        {hours}:{minutes}:{seconds}
      </p>
      <p style={{ fontSize: '20px', color: '#e2e8f0', marginTop: '10px' }}>
        {day}, {month} {date}, {year}
      </p>
      <p className="last-updated">Live clock — Hyderabad (IST)</p>
    </div>
  );
}

export default CalendarWidget;