import React from "react";
import List from "../../List/List";
import { useLocation } from "react-router-dom";
import "./CoinPage.css"
// import List from '../../List/List'
//let address = `https://api.coingecko.com/api/v3/coins/{id}`;
// const response = await fetch(address);
// const coin_data = await response.json();
// console.log("API hit");
// console.log(coin_data);

//https://api.coingecko.com/api/v3/coins/{id}
// id = "bitcoin"
//https://api.coingecko.com/api/v3/coins/{id}/market_chart?vs_currency={inr}&days={30}
const CoinPage = () => {
  //{PerticularCoinData}

  let location = useLocation();
  /*
  //let PerticularCoinData;
  // const CoinData = async () => {
  //   //let address = `https://api.coingecko.com/api/v3/coins/${location.state.id}`;
  //   const response = await fetch(address);
  //   const coin_data = await response.json();
  //   //console.log();
  //   PerticularCoinData = coin_data;
  //   console.log("API hit PerticularCoinData :- ", PerticularCoinData);
  // };
  //CoinData();
  // const CoinContent = () => {};
  // const ItemLoader = setTimeout(CoinContent, 1500);
  */
   return (
     <div className="CoinPageBody">
       <List
         name={location.state.name}
         image={location.state.image}
         current_price={location.state.current_price}
         total_volume={location.state.total_volume}
         market_cap={location.state.market_cap}
         price_change_percentage_24h={
           location.state.price_change_percentage_24h
         }
         symbol={location.state.symbol}
       />

       <div className="detail">
         <h1>{location.state.name}</h1>
         <p className="discription">{location.state.discription}</p>
       </div>
     </div>
   );
};

export default CoinPage;
