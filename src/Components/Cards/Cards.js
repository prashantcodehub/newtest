import React from "react";
import "./cards.css";
import Logo from "../MicroComponents/Logo/Logo";
import Logoinfo from "../MicroComponents/LogoInfo/Logoinfo.js";
import Currentprice from "../MicroComponents/CurrentPrice/Currentprice";
import Totalvolume from "../MicroComponents/TotalVolume/Totalvolume";
import Marketcap from "../MicroComponents/MarketCap/Marketcap";

const Cards = ({
  image,
  name,
  current_price,
  price_change_percentage_24h,
  total_volume,
  market_cap,
  symbol
}) => {
  let cardClass;
  if (price_change_percentage_24h > 0) {
    cardClass = "card-contanet-green";
  } else {
    cardClass = "card-contanet-red";
  }
  return (
    <div className="card-contanet" id={cardClass}>
      <div className="Symbol-area">
        <Logo image={image} /> 
        <Logoinfo name={name} symbol={symbol} />
      </div>
      <Currentprice
        current_price={current_price}
        price_change_percentage_24h={price_change_percentage_24h}
      />
      <Totalvolume total_volume={total_volume} />
      <Marketcap market_cap={market_cap} />
    </div>
  );
};

export default Cards;
