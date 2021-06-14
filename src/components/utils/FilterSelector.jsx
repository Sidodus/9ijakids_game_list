import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

import { getFilterValue } from "../../actions/naijaGameActions";

class FilterSelector extends Component {
  componentDidMount() {
    this.props.getFilterValue("No Filter Selected");

    document
      .getElementById("filterSelector")
      .addEventListener("change", (e) => {
        e.preventDefault();
        let value = document.getElementById("filterSelector").value;
        console.log("value:", value);
        this.props.getFilterValue(value);
      });
  }

  render() {
    return (
      <ul className="nav flex-column">
        <li className="nav-item mx-auto">
          <a className="nav-link active" aria-current="page" href="#/">
            <span data-feather="home"></span>
            Filter By
          </a>
          <select
            className="form-select dropdown-menu-dark"
            id="filterSelector"
            aria-label="Default select example"
          >
            <option defaultValue>No Filter Selected</option>
            <option value="group">Group</option>
            <option value="level">Level</option>
          </select>
        </li>
      </ul>
    );
  }
}

FilterSelector.propType = {
  getFilterValue: PropTypes.func.isRequired,
};

export default connect(null, {
  getFilterValue,
})(FilterSelector);
