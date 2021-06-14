import React, { Component } from "react";
import { Provider } from "react-redux";

import store from "./store";

import NavBar from "./components/layouts/NavBar";
import Footer from "./components/layouts/Footer";
import BodyCard from "./components/naijaKids/BodyCard";

import "./App.css";

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <NavBar />
        <BodyCard />
        <Footer />
      </Provider>
    );
  }
}

export default App;
