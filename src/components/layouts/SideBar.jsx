import React, { Component } from "react";
import Filter from "../utils/Filter";

export default class SideBar extends Component {
  render() {
    return (
      <nav
        id="sidebarMenu"
        className="col-md-3 col-lg-2 d-md-block sidebar collapse"
        style={{
          height: "100%",
          width: "100%",
          backgroundColor: "lightgray",
        }}
      >
        <div className="position-sticky pt-3">
          <span id="sideBarFilter">
            <Filter />
          </span>
        </div>
      </nav>
    );
  }
}
