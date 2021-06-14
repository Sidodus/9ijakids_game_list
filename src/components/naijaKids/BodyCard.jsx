import React, { Component } from "react";
import Cards from "./Cards";
import SideBar from "../layouts/SideBar";

class BodyCard extends Component {
  render() {
    return (
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-9">
            <Cards />
          </div>
          <div className="col-md-3">
            <SideBar />
          </div>
        </div>
      </div>
    );
  }
}

export default BodyCard;
