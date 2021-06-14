import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

import {
  filterGame,
  filteredSearchedGames,
} from "../../actions/naijaGameActions";

class Filter extends Component {
  state = {
    initialGames: [],
    filteredGames: [],
    filteredValue: "",
  };

  static getDerivedStateFromProps = async (props, state) => {
    // init
    if (state.initialGames.length === 0) {
      state.initialGames = props.games;
      state.filteredGames = props.games;
      state.filteredValue = "No Filter Selected";

      sessionStorage.setItem("filteredGames", JSON.stringify(props.games));
    } else {
      props.filterGame(state.filteredGames, state.filteredValue);
      props.filteredSearchedGames(state.filteredGames);
      sessionStorage.setItem(
        "compiledFilteredSearched",
        JSON.stringify(state.filteredGames)
      );
    }
    return {};
  };

  filterList = (e) => {
    document.getElementById("searchInput").value = "";
    // document.getElementById("searchNotFound").style.display = "none";

    const filterValue = e.target.value;
    this.setState({ filteredValue: filterValue });

    if (filterValue !== "No Filter Selected") {
      let initFilter = this.state.initialGames;
      let currentFilter = initFilter.sort((a, b) => {
        return a[filterValue].localeCompare(b[filterValue]);
      });

      // Set Initial Games Back To Init Value Bcs Above Sort Function Automatically Changes It
      this.setState({
        initialGames: JSON.parse(sessionStorage.getItem("9ijaKids")),
        filteredGames: currentFilter,
      });
      sessionStorage.setItem("filteredGames", JSON.stringify(currentFilter));
    } else {
      // Reset All
      this.setState({
        initialGames: JSON.parse(sessionStorage.getItem("9ijaKids")),
        filteredGames: JSON.parse(sessionStorage.getItem("9ijaKids")),
      });

      sessionStorage.setItem(
        "filteredGames",
        sessionStorage.getItem("9ijaKids")
      );
    }
  };

  render() {
    return (
      <ul className="nav flex-column">
        <li className="nav-item mx-auto">
          <a className="nav-link active" aria-current="page" href="#/">
            <span data-feather="home"></span>
            Filter By
          </a>
          <select
            onChange={this.filterList}
            className="form-select bg-success text-light"
            id="filterSelector"
            aria-label="Default select example"
          >
            <option defaultValue>No Filter Selected</option>
            <option value="Group">Group</option>
            <option value="Level">Level</option>
          </select>
        </li>
      </ul>
    );
  }
}

Filter.propType = {
  filterGame: PropTypes.func.isRequired,
  filteredSearchedGames: PropTypes.func,
  games: PropTypes.array.isRequired,
};

const mapStateToProps = (state) => ({
  games: state.naijaKids.games,
});

export default connect(mapStateToProps, {
  filterGame,
  filteredSearchedGames,
})(Filter);
