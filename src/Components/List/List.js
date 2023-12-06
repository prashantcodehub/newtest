import React from 'react'
import Logo from '../MicroComponents/Logo/Logo';
import Logoinfo from '../MicroComponents/LogoInfo/Logoinfo';
import Currentprice from '../MicroComponents/CurrentPrice/Currentprice';
import Totalvolume from '../MicroComponents/TotalVolume/Totalvolume';
import Marketcap from '../MicroComponents/MarketCap/Marketcap';
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
  return (
    <div className="listContaner">
      <Logo image={image} />
      <Logoinfo name={name} symbol={symbol} />
      <Currentprice
        current_price={current_price}
        price_change_percentage_24h={price_change_percentage_24h}
      />
      <Totalvolume total_volume={total_volume} />
      <Marketcap market_cap={market_cap} />

      <div>
        <img src={image} alt="Logo" className="Crypto-logo-List" />

        <p className="symbol">{symbol}</p>
        <p className="name">{name}</p>

        
      </div>
    </div>
  );
};

export default List