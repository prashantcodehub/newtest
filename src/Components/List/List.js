import React from 'react'
// import Logo from '../MicroComponents/Logo/Logo';
// import Logoinfo from '../MicroComponents/LogoInfo/Logoinfo';
// import Currentprice from '../MicroComponents/CurrentPrice/Currentprice';
// import Totalvolume from '../MicroComponents/TotalVolume/Totalvolume';
// import Marketcap from '../MicroComponents/MarketCap/Marketcap';
import "./List.css"

const List = ({
  image,
  name,
  current_price,
  price_change_percentage_24h,
  total_volume,
  market_cap,
  symbol,
}) => {

  let flag = true;
  let PCV ;
  let listContaner ;
  if ( price_change_percentage_24h > 0 ) {
    flag = true; PCV = "PCV-UP"; listContaner = "listContaner-up";
  } else {
    flag = false; PCV = "PCV-DOWN"; listContaner = "listContaner-down";
  }

  return (
    <div className="listContaner" id={listContaner}>
      <img src={image} alt="Logo" className="Logo" />

      <p className="SN">
        <p className="symbol">{symbol}</p>
        <p className="name">{name}</p>
      </p>

      <p className="current_price">
        <h2>{current_price}</h2>
      </p>

      <p className="price_change_percentage_24h">
        <p className={PCV}>{price_change_percentage_24h}</p>
        {/* {flag ? (
          <p className="list-changeUP"> up </p>
        ) : (
          <p className="list-changedown"> down </p>
        )} */}
      </p>

      <p className="total_volume">
        <b>total volume: </b>
        {total_volume}
      </p>

      <p className="market_cap">
        <b>market cap: </b>
        {market_cap}
      </p>
    </div>
  );
};

export default List