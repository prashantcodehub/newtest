import React from 'react'
import "./CurrentPrice.css"

const Currentprice = ({ current_price, price_change_percentage_24h }) => {

  let flag;
  if (price_change_percentage_24h > 0)  {flag = true;}
  else {flag = false;}

  return (
    <div className="Currentprice_contaner">
      <div className="Currentprice_button_contaner ">
        <button className="priceChange  Currentprice-button"> {price_change_percentage_24h} </button>

        { flag ? 
          <button className="iconForUp  Currentprice-button"> up </button> 
          : <button className="iconForDown  Currentprice-button"> down </button>
        }
      </div>

      <h2 className="Currentprice">{current_price}</h2>
    </div>
  );
};

export default Currentprice
