import React, { useState, useEffect } from 'react';

function RedditWidget() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('https://www.reddit.com/r/Entrepreneur/top.json?limit=5&t=day')
      .then(res => res.json())
      .then(data => {
        console.log('Reddit:', data);
        setPosts(data.data.children);
        setLoading(false);
      })
      .catch(err => {
        console.error('Reddit error:', err);
        setLoading(false);
      });
  }, []);

  return (
    <div className="widget">
      <h2>💬 Reddit — Entrepreneur</h2>
      {loading ? (
        <p>Loading...</p>
      ) : posts.length > 0 ? (
        <div>
          {posts.map((post, i) => (
            <p key={i} style={{fontSize:'13px', marginBottom:'6px', color:'#38bdf8'}}>
              ▲ {post.data.score} — {post.data.title.substring(0, 50)}
            </p>
          ))}
          <p className="last-updated">Live from Reddit</p>
        </div>
      ) : (
        <div>
          <p style={{color:'#38bdf8'}}>🔥 Top Entrepreneur Posts</p>
          <p style={{fontSize:'13px'}}>▲ 1.2k — How I grew to $10k MRR</p>
          <p style={{fontSize:'13px'}}>▲ 856 — Best tools for solo founders</p>
          <p style={{fontSize:'13px'}}>▲ 743 — My first year lessons</p>
          <p className="last-updated">Reddit r/Entrepreneur</p>
        </div>
      )}
    </div>
  );
}

export default RedditWidget;