import React, { useState, useContext } from "react";
import "./header.scss";
import { MovieContext } from "../../context/MovieContext";
const Header = () => {
  const { handleChangeSearch, handleSearchMovie } = useContext(MovieContext);
  const [navBar, setNavBar] = useState(false);
  const handleStickyHeader = () => {
    setNavBar(window.scrollY > 0 ? true : false);
  };
  window.addEventListener("scroll", handleStickyHeader);

  return (
    <header
      className={navBar ? " header-container active" : "header-container"}
    >
      <ul>
        <li>
          <img
            src="https://www.themoviedb.org/assets/2/v4/logos/v2/blue_short-8e7b30f73a4020692ccca9c88bafe5dcb6f8a62a4c6bc55cd9ba82bb2cd95f6c.svg"
            alt=""
          />
        </li>
        <li>
          <a href="">Movies</a>
        </li>
        <li>
          <a href="">TV Shows</a>
        </li>
      </ul>
      <form action="">
        <input placeholder="Search ..." onChange={handleChangeSearch} />
        <button onClick={handleSearchMovie}>
          <i class="fas fa-search"></i>
        </button>
      </form>
    </header>
  );
};

export default Header;
