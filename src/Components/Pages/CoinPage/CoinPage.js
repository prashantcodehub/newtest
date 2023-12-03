import React from 'react'
import List from '../../List/List'




//https://api.coingecko.com/api/v3/coins/{id}
// id = "bitcoin"
//https://api.coingecko.com/api/v3/coins/{id}/market_chart?vs_currency={inr}&days={30}
const CoinPage = ({PerticularCoinData}) => {
  return (
    <div>
      <List
        name={PerticularCoinData?.name}
        image={PerticularCoinData?.image}
        current_price={PerticularCoinData?.current_price}
        total_volume={PerticularCoinData?.total_volume}
        market_cap={PerticularCoinData?.market_cap}
        price_change_percentage_24h={
          PerticularCoinData?.price_change_percentage_24h
        }
        symbol={PerticularCoinData?.symbol}
      />

      <div>
        <h2>{PerticularCoinData.name}</h2>
        <p>{PerticularCoinData.discription.en}</p>
      </div>
    </div>
  );
}

export default CoinPage