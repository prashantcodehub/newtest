import React from "react";
import "./CardOrList.css";
import { useState } from "react";
import Cards from "../Cards/Cards";
import List from "../List/List";

const Cardorlist = ({ data }) => {
  let [showType, setshowType] = useState(true);

  return (
    <div>
      <div className="Cardorlist-contaner">
        <div>
          <button
            className="card-button"
            onClick={() => setshowType(true)} 
          >
            Card
          </button>
        </div>

        <div>
          <button
            className="list-button"
            onClick={() => setshowType(false)} 
          >
            List
          </button>
        </div>
      </div>
      <div className="coN">
        {showType
          ? data?.map((item) => <Cards name={item.name} />)
          : data?.map((item) => <List name={item.name} />)}
      </div>
    </div>
  );
};

export default Cardorlist;
