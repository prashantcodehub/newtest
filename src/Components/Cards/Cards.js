import React from 'react'
import "./cards.css"
import Logo from '../MicroComponents/Logo/Logo';
// import Logoinfo from "../MicroComponents/LogoInfo/Logoinfo.js";

const Cards = () => {
  return (
    <div className="card-contanet">
      <div>
        <Logo/>
        {/* <Logoinfo/> */}
      </div>
        
    </div>
  );
}

export default Cards