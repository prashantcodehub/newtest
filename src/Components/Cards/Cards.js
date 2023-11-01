import React from 'react'
import "./cards.css"
import Logo from '../MicroComponents/Logo/Logo';
import Logoinfo from "../MicroComponents/LogoInfo/Logoinfo.js";
import Currentprice from '../MicroComponents/CurrentPrice/Currentprice';
import Totalvolume from "../MicroComponents/TotalVolume/Totalvolume";
import Marketcap from "../MicroComponents/MarketCap/Marketcap";

const Cards = () => {
  return (
    <div className="card-contanet">
      <div className='Symbol-area'>
        <Logo/>
        <Logoinfo/>
      </div>
      <Currentprice/>
      <Totalvolume/>
      <Marketcap/>
        
    </div>
  );
}

export default Cards