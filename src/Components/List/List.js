import React from 'react'
import Logo from '../MicroComponents/Logo/Logo';
import Logoinfo from '../MicroComponents/LogoInfo/Logoinfo';
import Currentprice from '../MicroComponents/CurrentPrice/Currentprice';
import Totalvolume from '../MicroComponents/TotalVolume/Totalvolume';
import Marketcap from '../MicroComponents/MarketCap/Marketcap';
import "./List.css"

const List = () => {
  return (
    <div className="listContaner" >
      <Logo />
      <Logoinfo />
      <Currentprice />
      <Totalvolume />
      <Marketcap />
    </div>
  );
}

export default List