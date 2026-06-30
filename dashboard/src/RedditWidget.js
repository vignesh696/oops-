import React from 'react';

function RedditWidget() {
  const posts = [
    { score: 1243, title: 'How I grew my SaaS to $10k MRR in 6 months' },
    { score: 876, title: 'Best tools for solo founders in 2026' },
    { score: 743, title: 'My first year as an entrepreneur - lessons learned' },
    { score: 621, title: 'Cold email template that got me 50 clients' },
    { score: 534, title: 'How to validate your idea before building' },
  ];

  return (
    <div className="widget">
      <h2>💬 Reddit — Entrepreneur</h2>
      <div>
        {posts.map((post, i) => (
          <p key={i} style={{fontSize:'13px', marginBottom:'6px'}}>
            <span style={{color:'#64748b'}}>▲ {post.score}</span>
            <span style={{color:'#38bdf8'}}> — {post.title}</span>
          </p>
        ))}
        <p className="last-updated">r/Entrepreneur trending</p>
      </div>
    </div>
  );
}

export default RedditWidget;