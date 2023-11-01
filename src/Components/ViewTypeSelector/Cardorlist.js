import React from "react";
import "./CardOrList.css";
import { useState } from "react";
import Cards from "../Cards/Cards";
import List from "../List/List";

const Cardorlist = () => {
  
  let [showType, setshowType] = useState(true);

  return (
    <div >

      <div className="Cardorlist-contaner">

        <div>
          <button
            className="card-button"
            onClick={() => setshowType((showType = true))}
          >
            Card
          </button>
        </div>

        <div>
          <button
            className="list-button"
            onClick={() => setshowType((showType = false))}
          >
            List
          </button>
        </div>

      </div>

      {showType ? <Cards/> : <List/>}

      
    </div>
  );
};

export default Cardorlist;
