import React from "react";
import "./nav.css";
import Searchbar from "../../MicroComponents/SearchBar/Searchbar";
import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";
import WishList from "../../Pages/WishList/WishList";
import Compare from "../../Pages/CompareCoins/Compare";

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
    <Router>
      <div className="navbar">
        <div className="logo">
          <a href="/#">
            <b> CryptoTracker. </b>
          </a>
        </div>

        <div className="everyThingExceptlogoInNavbar">
          <Searchbar />

          <div>
            <button className="Dashboard">
              <Link to="./">Dashboard</Link>
            </button>
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
                  <a href="../../Pages/WishList/WishList">Wish list</a>
                </button>
              </li>
              <li>
                <button type="button" className="item">
                  <Link to="../../Pages/Compare/Compare">Compare</Link>
                </button>
              </li>
            </ul>
          </div>
          <Routes>
            <Route
              exact
              path="../../Pages/CoinPage/CoinPage"
              element={<WishList />}
            ></Route>
            <Route
              exact
              path="../../Pages/Compare/Compare"
              element={<Compare />}
            ></Route>
          </Routes>
        </div>
      </div>
    </Router>
  );
};

export default Navbar;
