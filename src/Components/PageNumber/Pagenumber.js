import { Pagination } from '@mui/material';
import React from 'react'

const Pagenumber = ({ totalNoOfPages, setPageNo }) => {
  const [page, setPage] = React.useState(1);
  const handleChange = (e, value) => {
    setPage(value);
    setPageNo(value);
  };

  return (
    <div>
      {/* <Pagination count={totalNoOfPages} variant="outlined" color="primary" /> */}
      <Pagination count={totalNoOfPages} page={page} onChange={handleChange} />
    </div>
  );
};

export default Pagenumber

