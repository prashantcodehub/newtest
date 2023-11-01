import React from 'react'
import "./CurrentPrice.css"

const Currentprice = () => {
  return (
    <div className='Currentprice_contaner'>

      <div className="Currentprice_button_contaner ">
        <button className="priceChange  Currentprice-button"> -3.2% </button>
        <button className="iconForUp  Currentprice-button"> up </button>
        <button className="iconForDown  Currentprice-button"> down </button>
      </div>

      <h2 className='Currentprice'>1254524</h2>
      
    </div>
  );
}

export default Currentprice