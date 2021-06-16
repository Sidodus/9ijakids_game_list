import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

import { filterGame } from "../../actions/naijaGameActions";

class Filter extends Component {
  state = {
    initialGames: [],
    filterGroupSelector: "---Group---",
    filterLevelSelector: "---Level---",
  };

  componentDidMount() {
    this.setState({ initialGames: this.props.games }, () => {
      this.props.filterGame(this.props.games, "");
    });
  }

  filterList = (e) => {
    document.getElementById("searchInput").value = "";

    let { initialGames } = this.state;

    this.setState({ [e.target.id]: e.target.value }, () => {
      let mapFilterGroupSelector = this.state.filterGroupSelector;
      let mapFilterLevelSelector = this.state.filterLevelSelector;

      if (this.state.filterGroupSelector === "---Group---") {
        mapFilterGroupSelector = "";
      } else if (this.state.filterLevelSelector === "---Level---") {
        mapFilterLevelSelector = "";
      }

      // Run Filter
      let filteredGameList = initialGames.filter((item) => {
        return item.Group.toLowerCase().includes(
          mapFilterGroupSelector.toLowerCase()
        );
      });

      let filteredGameList2 = filteredGameList.filter((item) => {
        return item.Level.toLowerCase().includes(
          mapFilterLevelSelector.toLowerCase()
        );
      });
      this.props.filterGame(filteredGameList2, e.target.value);

      // Reset Filter Value Whenever  BTN's Are In Default Mode
      if (
        this.state.filterGroupSelector === "---Group---" &&
        this.state.filterLevelSelector === "---Level---"
      ) {
        this.props.filterGame(initialGames, e.target.value);
      }
    });
  };

  render() {
    return (
      <ul className="nav flex-column">
        <li id="resetFilterDisplay" className="nav-item mx-auto">
          <a className="nav-link active" aria-current="page" href="#/">
            <span data-feather="home"></span>
            Filter By
          </a>
          <select
            onChange={this.filterList}
            className="form-select bg-success text-light"
            id="filterGroupSelector"
            aria-label="Default select example"
          >
            <option defaultValue className="text-dark h6 bg-secondary">
              ---Group---
            </option>
            <option value="Academic">Academic</option>
            <option value="Financial Literacy">Financial Literacy</option>
          </select>

          <select
            onChange={this.filterList}
            className="form-select bg-primary text-light"
            id="filterLevelSelector"
            aria-label="Default select example"
          >
            <option defaultValue className="text-dark h6 bg-secondary">
              ---Level---
            </option>
            <option value="Key Stage 1">Key Stage 1</option>
            <option value="Key Stage 2">Key Stage 2</option>
            <option value="Financial Literacy">Financial Literacy</option>
          </select>
        </li>
      </ul>
    );
  }
}

Filter.propType = {
  filterGame: PropTypes.func.isRequired,
  games: PropTypes.array.isRequired,
};

const mapStateToProps = (state) => ({
  games: state.naijaKids.games,
});

export default connect(mapStateToProps, {
  filterGame,
})(Filter);
