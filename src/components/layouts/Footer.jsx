import React, { Component } from "react";

class Footer extends Component {
  render() {
    // Set Footer Year
    const thisYear = new Date("2021").getFullYear();
    let presentYear = new Date().getFullYear();

    return (
      <footer
        className="container mx-auto pointerScale small"
        style={{
          color: "black",
          textAlign: "center",
          marginTop: "10px",
          marginBottom: "7px",
          paddingBottom: "7px",
        }}
      >
        <div className="row animated bounceInLeft slower">
          <div className="col-md-12">
            Copyright (c){" "}
            <span id="copyRightYear">
              {thisYear === presentYear
                ? thisYear
                : thisYear < presentYear
                ? thisYear + " - " + presentYear
                : null}{" "}
            </span>{" "}
            <a
              href="https://github.com/Sidodus"
              target="_blank"
              rel="noopener noreferrer"
            >
              Saheed Odulaja
            </a>{" "}
            <br />
            <br />
          </div>
        </div>
      </footer>
    );
  }
}

export default Footer;
