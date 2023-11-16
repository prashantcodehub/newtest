import React from 'react'
import "./Logoinfo.css";

const Logoinfo = (props) => {
  return (
    <div className="Logoinfo">
      <p className="symbol">Symbol</p>
      <p className="name">{props.name}</p>
    </div>
  );
}

export default Logoinfo