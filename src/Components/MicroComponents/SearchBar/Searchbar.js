import React from 'react'
import './searchBar.css'

const Searchbar = () => {
  return (
    <div className="Searchbar-contaner">
        <form action="">
            <input type="search" required />
            <i class="fa fa-search"></i>
            {/* <a href="javascript:void(0)" id="clear-btn">Clear</a> */}
        </form>
    </div>
  );
}

export default Searchbar