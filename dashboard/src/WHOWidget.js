import React from 'react';

function WHOWidget() {
  return (
    <div className="widget">
      <h2>🏥 WHO Health</h2>
      <p>🌍 Global NCD Mortality Risk</p>
      <p style={{color:'#38bdf8'}}>India: 26.4%</p>
      <p style={{color:'#38bdf8'}}>Global Avg: 18.2%</p>
      <p className="last-updated">WHO GHO Data</p>
    </div>
  );
}

export default WHOWidget;