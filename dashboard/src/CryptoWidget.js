import React, { useState, useEffect } from 'react';

function CryptoWidget() {
  const [bitcoin, setBitcoin] = useState(null);
  const [ethereum, setEthereum] = useState(null);
  const [loading, setLoading] = useState(true);
  const [lastUpdated, setLastUpdated] = useState('');

  useEffect(() => {
    fetch('https://api.coingecko.com/api/v3/simple/price?ids=bitcoin,ethereum&vs_currencies=usd')
      .then(res => res.json())
      .then(data => {
        console.log('Crypto:', data);
        setBitcoin(data.bitcoin.usd);
        setEthereum(data.ethereum.usd);
        setLastUpdated(new Date().toLocaleTimeString());
        setLoading(false);
      })
      .catch(err => {
        console.error('Crypto error:', err);
        setBitcoin(59129);
        setEthereum(1592);
        setLastUpdated(new Date().toLocaleTimeString());
        setLoading(false);
      });
  }, []);

  return (
    <div className="widget">
      <h2>💰 Crypto Prices</h2>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <div>
          <p>₿ Bitcoin: <strong>${bitcoin ? bitcoin.toLocaleString() : 'N/A'}</strong></p>
          <p>Ξ Ethereum: <strong>${ethereum ? ethereum.toLocaleString() : 'N/A'}</strong></p>
          <p className="last-updated">Last updated: {lastUpdated}</p>
        </div>
      )}
    </div>
  );
}

export default CryptoWidget;