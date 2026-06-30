import React, { useState, useEffect } from 'react';

function HRWidget() {
  const [employees, setEmployees] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('https://randomuser.me/api/?results=5&nat=us,in,gb')
      .then(res => res.json())
      .then(data => {
        setEmployees(data.results);
        setLoading(false);
      })
      .catch(err => {
        setLoading(false);
      });
  }, []);

  return (
    <div className="widget">
      <h2>👥 HR Data</h2>
      {loading ? (
        <p>Loading...</p>
      ) : employees.length > 0 ? (
        <div>
          {employees.map((emp, i) => (
            <div key={i} style={{display:'flex', alignItems:'center', marginBottom:'8px'}}>
              <img
                src={emp.picture.thumbnail}
                alt="avatar"
                style={{borderRadius:'50%', marginRight:'8px', width:'30px', height:'30px'}}
              />
              <span style={{fontSize:'13px'}}>
                {emp.name.first} {emp.name.last}
                <span style={{color:'#64748b', fontSize:'11px'}}> — {emp.location.country}</span>
              </span>
            </div>
          ))}
          <p className="last-updated">Mock HR Data</p>
        </div>
      ) : (
        <p>Failed to load</p>
      )}
    </div>
  );
}

export default HRWidget;