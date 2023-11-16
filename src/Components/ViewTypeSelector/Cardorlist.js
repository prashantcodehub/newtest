import React from "react";
import "./CardOrList.css";
import { useState } from "react";
import Cards from "../Cards/Cards";
import List from "../List/List";
import Pagenumber from "../PageNumber/Pagenumber";

const Cardorlist = ({ data }) => {
  const [showType, setshowType] = useState(true);
  const [pageNo, setPageNo] = useState(1);
  
  let itemPerPage = 10;
  let lastItemNo = pageNo * itemPerPage ;
  let firstItemNo = lastItemNo - itemPerPage ;

  const currentPageData = data.slice(firstItemNo, lastItemNo);
  const totalNoOfPages = Math.ceil(data.length / itemPerPage);

  return (
    <div>
      <div className="Cardorlist-contaner">
        <div>
          <button className="card-button" onClick={() => setshowType(true)}>
            Card
          </button>
        </div>

        <div>
          <button className="list-button" onClick={() => setshowType(false)}>
            List
          </button>
        </div>
      </div>

      <div className="coN">
        {showType
          ? currentPageData?.map((item) => (
              <Cards
                name={item?.name}
                image={item?.image}
                current_price={item?.current_price}
                total_volume={item?.total_volume}
                market_cap={item?.market_cap}
                price_change_percentage_24h={item?.price_change_percentage_24h}
                symbol={item?.symbol}
              />
            ))
          : currentPageData?.map((item) => (
              <List
                name={item?.name}
                image={item?.image}
                current_price={item?.current_price}
                total_volume={item?.total_volume}
                market_cap={item?.market_cap}
                price_change_percentage_24h={item?.price_change_percentage_24h}
                symbol={item?.symbol}
              />
            ))}
      </div>

      <div>
        <Pagenumber
          pageNo={pageNo}
          totalNoOfPages={totalNoOfPages}
          setPageNo={setPageNo}
        />
      </div>
    </div>
  );
};

export default Cardorlist;
