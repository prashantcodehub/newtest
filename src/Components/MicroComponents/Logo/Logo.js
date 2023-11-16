import React from 'react'
import "./LOGO.css"

const Logo = ({ image }) => {
  return (
    <div className="logo-contaner">
      <img src={image} alt="Logo" className="Crypto-logo" />
    </div>
  );
};

export default Logo