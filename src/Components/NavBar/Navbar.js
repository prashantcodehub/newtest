import React from "react";
import "./nav.css";
import Searchbar from "../MicroComponents/SearchBar/Searchbar";

const Navbar = () => {
  function toggleDropdown() {
    var dropdown = document.getElementById("myDropdown");
    if (dropdown.style.display === "block") {
      dropdown.style.display = "none";
    } else {
      dropdown.style.display = "block";
    }
  }

  window.onclick = function (event) {
    if (!event.target.matches(".dropdown-button")) {
      var dropdowns = document.getElementsByClassName("dropdown-menu");
      console.log(dropdowns);
      for (var i = 0; i < dropdowns.length; i++) {
        var openDropdown = dropdowns[i];
        if (openDropdown.style.display === "block") {
          openDropdown.style.display = "none";
        }
      }
    }
  };

  return (
    <div className="navbar">
      <div className="logo">
        <a href="/#">
          <b> CryptoTracker. </b>
        </a>
      </div>

      <div className="everyThingExceptlogoInNavbar">
        <Searchbar />

        <div>
          <button className="Dashboard"> Dashboard </button>
        </div>
        <div className="dropdown">
          <button
            className="dropdown-button"
            type="button"
            onClick={toggleDropdown}
          >
            Menu
          </button>

          <ul className="dropdown-menu" id="myDropdown">
            <li>
              <button type="button" className="item">
                Wish list
              </button>
            </li>
            <li>
              <button type="button" className="item">
                Compare
              </button>
            </li>
            {/* <li><button type="button" className='item'>Something else here</button></li> */}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
