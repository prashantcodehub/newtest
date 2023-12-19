import React from 'react'
import "./MarketCap.css";

const Marketcap = ({ market_cap }) => {
  return (
    <div className="Marketcap">
      Marketcap : <span>{market_cap}</span>
    </div>
  );
};

export default Marketcap