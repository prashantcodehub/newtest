import React from "react";
import "./nav.css";
import Searchbar from "../../MicroComponents/SearchBar/Searchbar";
import { Link, useNavigate } from "react-router-dom";

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

  const navigate = useNavigate();

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
              <button
                type="button"
                className="item"
                onClick={() => navigate("./Components/Pages/WishList/WishList")}
              >
                <Link to="./Components/Pages/WishList/WishList">Wish list</Link>
              </button>
            </li>

            <li>
              <button
                type="button"
                className="item"
                onClick={() =>
                  navigate("./Components/Pages/CompareCoins/Compare")
                }
              >
                <Link to="./Components/Pages/CompareCoins/Compare">
                  Compare{" "}
                </Link>
              </button>
            </li>

            <li>
              <button
                type="button"
                className="item"
                onClick={() => navigate("./Components/Pages/CoinPage/CoinPage")}
              >
                <Link to="./Components/Pages/CoinPage/CoinPage">CoinPage</Link>
              </button>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
