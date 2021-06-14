import {
  GET_9IJA_KIDS,
  FILTER_GAME,
  SEARCH_GAME,
  FILTERED_SEARCHED_GAMES,
} from "./types";
// import axios from "axios";

import * as res from "../Api.json";

export const fetchApi = (arg) => async (dispatch) => {
  // const res = await axios.get("http://jsonplaceholder.typicode.com/todos");
  // const res = await axios.get("../Api.json");
  if (arg !== undefined) {
    // console.log("ArgArg:", arg);
    dispatch({
      type: GET_9IJA_KIDS,
      // payload: res.data,
      payload: arg,
    });
  } else {
    // console.log("ResRes:", res);
    dispatch({
      type: GET_9IJA_KIDS,
      // payload: res.data,
      payload: res.default,
    });
  }
};

export const filterGame = (filteredGames, filterStr) => async (dispatch) => {
  dispatch({
    type: FILTER_GAME,
    payload: [filteredGames, filterStr],
  });
};

export const searchGame = (searchedGames, searchStr) => (dispatch) => {
  dispatch({
    type: SEARCH_GAME,
    payload: [searchedGames, searchStr],
  });
};

export const filteredSearchedGames = (filteredSearch) => (dispatch) => {
  dispatch({
    type: FILTERED_SEARCHED_GAMES,
    payload: filteredSearch,
  });
};
