import React from "react";
import "./CardOrList.css";
import { useState } from "react";
import Cards from "../Cards/Cards";
import List from "../List/List";
import CustomPagination from "../PageNumber/CustomPagination";
import Searchbar from "../MicroComponents/SearchBar/Searchbar";

const Cardorlist = ({ data }) => {
  const [showType, setshowType] = useState(true);
  const [pageNo, setPageNo] = useState(1);
  const [viewStyler, setviewStyler] = useState("coN");
  const [search, setsearch] = useState("");

  let FilteredData = [];
  function Filter(item) {
    if (
      item?.id.includes(search) ||
      item?.symbol.includes(search) ||
      item?.name.includes(search)
    )
      return item;
  }
  FilteredData = data?.filter(Filter);

  let itemPerPage ;
  if( FilteredData.length < 10) itemPerPage = FilteredData.length ;
  else itemPerPage = 10;
  let lastItemNo = pageNo * itemPerPage;
  let firstItemNo = lastItemNo - itemPerPage;

  const currentPageData = FilteredData.slice(firstItemNo, lastItemNo);
  const totalNoOfPages = Math.ceil(FilteredData.length / itemPerPage);

  const handleListViewClicked = () => {
    setshowType(false);
    setviewStyler("lis");
  };
  const handleGridViewClicked = () => {
    setshowType(true);
    setviewStyler("coN");
  };

  // console.log(search);

  function CardDisplay(item) {
    return (
      <Cards
        id={item?.id}
        name={item?.name}
        image={item?.image}
        current_price={item?.current_price}
        total_volume={item?.total_volume}
        market_cap={item?.market_cap}
        price_change_percentage_24h={item?.price_change_percentage_24h}
        symbol={item?.symbol}
      />
    );
  }

  function ListDisplay(item) {
    return (
      <List
        id={item?.id}
        name={item?.name}
        image={item?.image}
        current_price={item?.current_price}
        total_volume={item?.total_volume}
        market_cap={item?.market_cap}
        price_change_percentage_24h={item?.price_change_percentage_24h}
        symbol={item?.symbol}
      />
    );
  }

  return (
    <div>
      <Searchbar setsearch={setsearch} />
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
          ? currentPageData?.map(CardDisplay)
          : currentPageData?.map(ListDisplay)}
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
