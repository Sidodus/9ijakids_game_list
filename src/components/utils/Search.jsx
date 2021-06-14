import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import {
  searchGame,
  filteredSearchedGames,
} from "../../actions/naijaGameActions";

class Search extends Component {
  state = {
    initialGames: [],
    searchedGames: [],
    searchValue: "",
  };

  componentDidUpdate() {
    this.props.filteredSearchedGames(this.state.searchedGames);
  }

  static getDerivedStateFromProps = (props, state) => {
    props.searchGame(state.searchedGames, state.searchValue);

    if (state.searchedGames.length === 0) {
      return {
        initialGames: props.games,
        searchedGames: [],
      };
    } else {
      sessionStorage.setItem(
        "compiledFilteredSearched",
        JSON.stringify(state.searchedGames)
      );
    }
    return {};
  };

  searchList = (e) => {
    const { initialGames } = this.state;

    let currentItems = initialGames;

    currentItems = currentItems.filter((item) => {
      return item.GameTitle.toLowerCase().includes(
        e.target.value.toLowerCase()
      );
    });
    this.setState({ searchedGames: currentItems, searchValue: e.target.value });
  };

  render() {
    return (
      <div>
        <input
          id="searchInput"
          onChange={this.searchList}
          className="form-control me-2 d-flex"
          type="text"
          placeholder="Search Game List"
          aria-label="Search"
        />
      </div>
    );
  }
}

Search.propTypes = {
  searchGame: PropTypes.func.isRequired,
  games: PropTypes.array.isRequired,
  filteredSearchedGames: PropTypes.func,
};

const mapStateToProps = (state) => ({
  games: state.naijaKids.games,
});

export default connect(mapStateToProps, {
  searchGame,
  filteredSearchedGames,
})(Search);
