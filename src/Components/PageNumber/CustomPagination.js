import React from "react";
import { Pagination } from "@mui/material";
import "./Pagination.css";

const CustomPagination = ({ setPageNo, totalNoOfPages }) => {
  const handlePageChange = (page) => {
    // console.log(page, "this is page");                   //----------------------->Check it page
    setPageNo(page);
    window.scrollTo(0, 0);
  };
  return (
    <div
      style={{
        width: "100%",
        display: "flex",
        justifyContent: "center",
        //margin: 10,
        paddingBottom: 10,
      }}
    >
      <Pagination
        className="pagination"
        count={totalNoOfPages}
        onChange={(event, val) => handlePageChange(val)}
        color="primary"

        // variant='outlined'
        // hidePrevButton hideNextButton
        // shape='rounded'
      />
    </div>
  );
};

export default CustomPagination;
