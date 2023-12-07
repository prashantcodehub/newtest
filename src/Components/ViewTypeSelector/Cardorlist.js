import React from "react";
import "./CardOrList.css";
import { useState } from "react";
import Cards from "../Cards/Cards";
import List from "../List/List";
import CustomPagination from "../PageNumber/CustomPagination";

const Cardorlist = ({ data }) => {
  const [showType, setshowType] = useState(true);
  const [pageNo, setPageNo] = useState(1);
  const [viewStyler, setviewStyler] = useState("coN");

  let itemPerPage = 10;
  let lastItemNo = pageNo * itemPerPage;
  let firstItemNo = lastItemNo - itemPerPage;

  const currentPageData = data.slice(firstItemNo, lastItemNo);
  const totalNoOfPages = Math.ceil(data.length / itemPerPage);

  const handleListViewClicked = () => {
    setshowType(false);
    setviewStyler("lis");
  };
  const handleGridViewClicked = () => {
    setshowType(true);
    setviewStyler("coN");
  };

  return (
    <div>
      <div className="Cardorlist-contaner">
        <div className="card-button" onClick={() => handleGridViewClicked()}>
          Card
        </div>

        <div className="list-button" onClick={() => handleListViewClicked()}>
          List
        </div>
      </div>

      <div className={viewStyler}>
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
        <CustomPagination
          pageNo={pageNo}
          totalNoOfPages={totalNoOfPages}
          setPageNo={setPageNo}
        />
      </div>
    </div>
  );
};

export default Cardorlist;
