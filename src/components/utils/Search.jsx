import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { filterGame, searchGame } from "../../actions/naijaGameActions";

class Search extends Component {
  state = {
    initialGames: [],
  };

  static getDerivedStateFromProps = (props, state) => {
    return {
      initialGames: props.games,
    };
  };

  searchList = (e) => {
    const { initialGames } = this.state;

    let currentItems = initialGames;

    currentItems = currentItems.filter((item) => {
      return item.GameTitle.toLowerCase().includes(
        e.target.value.toLowerCase()
      );
    });
    this.props.filterGame(currentItems, e.target.value);
    this.props.searchGame(currentItems, e.target.value);
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
  games: PropTypes.array.isRequired,
  filterGame: PropTypes.func.isRequired,
  searchGame: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  games: state.naijaKids.games,
});

export default connect(mapStateToProps, {
  filterGame,
  searchGame,
})(Search);
