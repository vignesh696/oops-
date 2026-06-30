import React, { useState, useEffect } from 'react';

function HackerNewsWidget() {
  const [story, setStory] = useState(null);

  useEffect(() => {
    fetch('https://hacker-news.firebaseio.com/v0/topstories.json')
      .then(res => res.json())
      .then(ids => {
        return fetch('https://hacker-news.firebaseio.com/v0/item/' + ids[0] + '.json');
      })
      .then(res => res.json())
      .then(data => {
        setStory(data);
      })
      .catch(err => {
        console.error('HN error:', err);
      });
  }, []);

  return (
    <div className="widget">
      <h2>📰 Hacker News</h2>
      {story ? (
        <div>
          <p style={{color:'#38bdf8', fontSize:'13px'}}>{story.title}</p>
          <p style={{color:'#64748b', fontSize:'11px'}}>▲ {story.score} points</p>
          <p className="last-updated">Live from Hacker News</p>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}

export default HackerNewsWidget;