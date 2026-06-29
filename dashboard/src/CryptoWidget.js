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
        console.log('Bitcoin price:', data.bitcoin.usd);
        console.log('Ethereum price:', data.ethereum.usd);
        setBitcoin(data.bitcoin.usd);
        setEthereum(data.ethereum.usd);
        setLastUpdated(new Date().toLocaleTimeString());
        setLoading(false);
      })
      .catch(err => {
        console.error('Error:', err);
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
          <p>₿ Bitcoin: <strong>${bitcoin}</strong></p>
          <p>Ξ Ethereum: <strong>${ethereum}</strong></p>
          <p className="last-updated">Last updated: {lastUpdated}</p>
        </div>
      )}
    </div>
  );
}

export default CryptoWidget;