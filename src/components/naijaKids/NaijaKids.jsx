import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

import NavBar from "../layouts/NavBar";
import Footer from "../layouts/Footer";
import BodyCard from "./BodyCard";

import { fetchApi } from "../../actions/naijaGameActions";

class NaijaKids extends Component {
  state = {
    gameList: [],
  };

  static getDerivedStateFromProps = (props, state) => {
    props.fetchApi();
    return { gameList: true };
  };

  render() {
    return (
      <React.Fragment>
        <NavBar />
        <BodyCard />
        <Footer />
      </React.Fragment>
    );
  }
}

NaijaKids.propType = {
  fetchApi: PropTypes.func.isRequired,
};

export default connect(null, {
  fetchApi,
})(NaijaKids);
