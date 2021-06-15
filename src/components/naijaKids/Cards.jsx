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
    filteredSearch: [],
    compiledSearchedGames: [],
  };

  static getDerivedStateFromProps = (props, state) => {
    // Init
    if (state.gameList.length === 0) {
      props.fetchApi();
      state.compiledSearchedGames = props.games;
      state.filteredSearch = props.filterProps[0];
    }

    // Render For Search
    if (props.currentSearchedGames.length > 0) {
      if (
        props.currentSearchedGames[0].length > 0 &&
        props.currentSearchedGames[1].length > 0
      ) {
        document.getElementById("searchNotFound").style.display = "none";
      } else if (
        props.currentSearchedGames[0].length > 0 &&
        props.currentSearchedGames[1].length === 0
      ) {
        document.getElementById("searchNotFound").style.display = "none";
      } else {
        document.getElementById("searchNotFound").style.display = "block";
      }
    }
    // Hide Search Not Found When Select (filter) BTN Is Clicked
    if (props.filterProps.length > 0) {
      if (props.filterProps[0].length > 0) {
        if (props.currentSearchedGames.length > 0) {
          if (props.currentSearchedGames[0].length === 0) {
            document.getElementById("searchNotFound").style.display = "none";
          }
        }
      }
    }

    return {};
  };

  render() {
    let mapper;
    if (this.state.filteredSearch === undefined) {
      mapper = this.state.compiledSearchedGames;
    } else {
      mapper = this.state.filteredSearch;
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
          {mapper.map((data) => (
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
  filterProps: PropTypes.array.isRequired,
  currentSearchedGames: PropTypes.array.isRequired,
};

const mapStateToProps = (state) => ({
  games: state.naijaKids.games,
  filterProps: state.naijaKids.filter,
  currentSearchedGames: state.naijaKids.currentSearch,
});

export default connect(mapStateToProps, {
  fetchApi,
})(Cards);
