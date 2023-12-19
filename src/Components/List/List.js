import React from "react";
import "./List.css";

const List = ({
  image,
  name,
  current_price,
  price_change_percentage_24h,
  total_volume,
  market_cap,
  symbol,
}) => {
  let PCV;
  let listContaner;
  if (price_change_percentage_24h > 0) {
    PCV = "PCV-UP";
    listContaner = "listContaner-up";
  } else {
    PCV = "PCV-DOWN";
    listContaner = "listContaner-down";
  }

  return (
    <div className="listContaner" id={listContaner}>
      <div style={{display: "flex"}}>
        <img src={image} alt="Logo" className="Logo" />
      </div>

      <div className="SN">
        <p className="symbol">{symbol}</p>
        <p className="name">{name}</p>
      </div>

      <div className="current_price">
        <h2>{current_price}</h2>
      </div>

      <div className="price_change_percentage_24h">
        <p className={PCV}>{price_change_percentage_24h}</p>
      </div>
      <div className="tv_mc">
        <div className="total_volume">
          <b>total volume: </b>
          {total_volume}
        </div>

        <div className="market_cap">
          <b>market cap: </b>
          {market_cap}
        </div>
      </div>
      
    </div>
  );
};

export default List;
