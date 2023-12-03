import { Pagination } from "@mui/material";
import React, { useState } from "react";

const Pagenumber = ({ totalNoOfPages, setPageNo }) => {
  const [page, setPage] = useState(1);
  const handleChange = (e, value) => {
    setPage(value);
    setPageNo(value);
  };

  return (
    <div className="pageNumber">
      <Pagination
        count={totalNoOfPages}
        page={page}
        onChange={handleChange}
        sx={{
          "& MuiPaginationItem-icon": {
            button: {
              backgroundColor: "red !important",
            },
          },
        }}
        //       sx={{
        // 					'& .MuiPagination-root': {
        //   button: {
        //     color: red !important
        //  }
        // }}
      />
    </div>
  );
};

export default Pagenumber;
