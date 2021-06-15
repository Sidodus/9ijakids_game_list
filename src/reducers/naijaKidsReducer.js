import {
  GET_9IJA_KIDS,
  FILTER_GAME,
  SEARCH_GAME,
} from "../actions/types";

const initialState = {
  games: [],
  filter: [],
  currentSearch: [],
};

export default function naijaKidsReducer(state = initialState, action) {
  switch (action.type) {
    case GET_9IJA_KIDS:
      return {
        ...state,
        games: action.payload,
      };
    case FILTER_GAME:
      return {
        ...state,
        filter: action.payload,
      };
    case SEARCH_GAME:
      return {
        ...state,
        currentSearch: action.payload,
      };
    default:
      return state;
  }
}
