import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

import { fetchApi } from "../../actions/naijaGameActions";

// import * as BeforeAndAfter from "../../GameImage/Before and After.png";
// import * as communication from "../../GameImage/Communication.png";
// import * as exploringLife from "../../GameImage/Exploring Life.png";
// import * as kiddiepreneur101 from "../../GameImage/Kiddiepreneur 101.png";
// import * as mathsPop from "../../GameImage/Maths Pop.png";
// import * as MathsmaniaCityDecimals from "../../GameImage/Mathsmania City - Decimals.png";
// import * as moneyMatters from "../../GameImage/Money Matters.png";

class Cards extends Component {
  state = {
    gameList: [],
    combineSearchFilter: [],
    filteredSearch: [],
    compiledSearchedGames: [],
    searchNotFound: false,
  };

  static getDerivedStateFromProps = (props, state) => {
    // Init
    if (state.gameList.length === 0) {
      props.fetchApi();
      state.compiledSearchedGames = props.games;
      sessionStorage.setItem("9ijaKids", JSON.stringify(props.games));
    }

    // Render For Search
    if (props.currentSearchedGames.length !== 0) {
      state.gameList = props.currentSearchedGames;
      state.combineSearchFilter = props.currentSearchedGames;
      document.getElementById("searchNotFound").style.display = "none";
      state.searchNotFound = false;
    } else if (
      props.currentSearchedGames.length === 0 &&
      props.currentSearchValue.length > 0
    ) {
      state.gameList = props.currentSearchedGames;
      state.combineSearchFilter = props.currentSearchedGames;
      document.getElementById("searchNotFound").style.display = "block";
      state.searchNotFound = true;
    }
    return {};
  };

  render() {
    let renderCompiledSearchGames;

    if (
      this.props.filteredSearch.length === 0 &&
      this.state.searchNotFound === false
    ) {
      renderCompiledSearchGames = this.state.compiledSearchedGames;
    } else {
      renderCompiledSearchGames = this.props.filteredSearch;
    }

    let keyCounter = 0;
    // let imagesCounter = 0;

    // let images = [
    //   BeforeAndAfter.default,
    //   communication.default,
    //   kiddiepreneur101.default,
    //   moneyMatters.default,
    //   mathsPop.default,
    //   exploringLife.default,
    //   MathsmaniaCityDecimals.default,
    // ];

    return (
      <React.Fragment>
        <div
          id="searchNotFound"
          className="p-5 mb-4 bg-light rounded-3"
          style={{ display: "none" }}
        >
          <div className="container-fluid py-5 text-center">
            <em className="display-5 fw-bold">Search Not Found!</em>
          </div>
        </div>
        <div className="card-group">
          {renderCompiledSearchGames.map((data) => (
            <div className="col-md-4 my-2 px-2" key={keyCounter++}>
              <div className="card bg-secondary">
                <div className="card-body">
                  <h5 className="card-title">{data.GameTitle}</h5>
                  <h6 className="card-subtitle mb-2 text-light">
                    {data.GameDescription}
                  </h6>
                </div>
                <img
                  src={data.GameImage}
                  // src={images[imagesCounter++]}
                  className="card-img-bottom img-thumbnail"
                  alt="img"
                ></img>
              </div>
            </div>
          ))}
        </div>
      </React.Fragment>
    );
  }
}

Cards.propType = {
  fetchApi: PropTypes.func.isRequired,
  games: PropTypes.array.isRequired,
  currentSearchedGames: PropTypes.array,
  currentSearchValue: PropTypes.string,
  filteredSearch: PropTypes.array,
};

const mapStateToProps = (state) => ({
  games: state.naijaKids.games,
  currentSearchedGames: state.naijaKids.currentSearch[0],
  currentSearchValue: state.naijaKids.currentSearch[1],
  filteredSearch: state.naijaKids.filteredSearch,
});

export default connect(mapStateToProps, {
  fetchApi,
})(Cards);
