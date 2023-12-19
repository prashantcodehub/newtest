import React from 'react'
import './searchBar.css'

const Searchbar = ({ setsearch }) => {

  const handleSearch = (e)=> {
    setsearch(e.target.value.toLowerCase());
  }

  return (
    <div className="Searchbar-contaner">
      <form action="">
        <input type="search" onChange={handleSearch} required />
        <i class="fa fa-search"></i>
        {/* <a href="javascript:void(0)" id="clear-btn">Clear</a> */}
      </form>
    </div>
  );
};

export default Searchbar