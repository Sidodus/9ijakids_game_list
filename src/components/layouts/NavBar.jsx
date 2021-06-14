import React from "react";
import Search from "../utils/Search";
import Filter from "../utils/Filter";

import logo from "../../GameImage/naijaKids_logo.png";

function NavBar() {
  return (
    <nav
      className="navbar navbar-light shadow mb-3 rounded"
      style={{ backgroundColor: "#e3f2fd" }}
    >
      <div className="container-fluid mx-5 px-5">
        <img src={logo} className="img-fluid" width="100px" alt="logo"></img>
        <span id="navBarFilter">
          <Filter />
        </span>
        <Search />
      </div>
    </nav>
  );
}

export default NavBar;
