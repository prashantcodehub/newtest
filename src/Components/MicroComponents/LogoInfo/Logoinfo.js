import React from 'react'
import "./Logoinfo.css";

const Logoinfo = ({name, symbol}) => {
  return (
    <div className="Logoinfo">
      <p className="symbol">{symbol}</p>
      <p className="name">{name}</p>
    </div>
  );
}

export default Logoinfo