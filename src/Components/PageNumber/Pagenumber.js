import { Pagination } from '@mui/material';
import React, { useState } from 'react'

const Pagenumber = ({ totalNoOfPages, setPageNo }) => {
  const [page, setPage] = useState(1);
  const handleChange = (e, value) => {
    setPage(value);
    setPageNo(value);
  };

  return (
    <div className="pageNumber">
      <Pagination count={totalNoOfPages} page={page} onChange={handleChange} />
    </div>
  );
};

export default Pagenumber

