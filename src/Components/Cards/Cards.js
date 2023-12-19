import React from "react";
import "./cards.css";
import Logo from "../MicroComponents/Logo/Logo";
import Logoinfo from "../MicroComponents/LogoInfo/Logoinfo.js";
import Currentprice from "../MicroComponents/CurrentPrice/Currentprice";
import Totalvolume from "../MicroComponents/TotalVolume/Totalvolume";
import Marketcap from "../MicroComponents/MarketCap/Marketcap";
import { useNavigate } from "react-router-dom";

const Cards = ({
  id,
  image,
  name,
  current_price,
  price_change_percentage_24h,
  total_volume,
  market_cap,
  symbol,
}) => {
  let cardClass;
  if (price_change_percentage_24h > 0) {
    cardClass = "card-contanet-green";
  } else {
    cardClass = "card-contanet-red";
  }
  let navigate = useNavigate();
  
  const LinkToCoinpage = async () => {
    //let address = `https://api.coingecko.com/api/v3/coins/${id}`;
    const response = await fetch(`https://api.coingecko.com/api/v3/coins/${id}`).then(resp => resp.json());
    
    console.log("API hit PerticularCoinData `discription.en:-`",response.description.en);
    console.log("API hit PerticularCoinData `discription`:- ",response.description);
    console.log("API hit PerticularCoinData `response` :- ", response); //id: 'bitcoin', symbol: 'btc', name
    console.log("API hit PerticularCoinData `response.id` :- ", response.id);
    console.log("API hit PerticularCoinData `response.name` :- ",response.name);

    navigate("CoinPage/", {
      state: {
        name: name,
        image: image,
        current_price: current_price,
        total_volume: total_volume,
        market_cap: market_cap,
        price_change_percentage_24h: price_change_percentage_24h,
        symbol: symbol,
        discription: response.description.en,
      },
    });
  };
  return (
    <div className="card-contanet" id={cardClass} onClick={LinkToCoinpage}>
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
