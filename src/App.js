import React, { Component } from "react";
import { Provider } from "react-redux";

import store from "./store";

import NaijaKids from "./components/naijaKids/NaijaKids";

import "./App.css";

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <NaijaKids />
      </Provider>
    );
  }
}

export default App;
