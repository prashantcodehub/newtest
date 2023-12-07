import React from 'react'
import "./CurrentPrice.css"

const Currentprice = ({ current_price, price_change_percentage_24h }) => {

  let Currentprice_change_contaner;
  if (price_change_percentage_24h > 0)  {Currentprice_change_contaner = "Currentprice_change_contaner_UP";}
  else {Currentprice_change_contaner = "Currentprice_change_contaner_DOWN";}

  return (
    <div className="Currentprice_contaner">
      <p className='change_persentage'>
       <p className={Currentprice_change_contaner}>{price_change_percentage_24h}</p> 
      </p>
      <h2 className="Currentprice">{current_price}</h2>
    </div>
  );
};

export default Currentprice
