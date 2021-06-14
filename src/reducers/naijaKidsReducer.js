import {
  GET_9IJA_KIDS,
  FILTER_GAME,
  SEARCH_GAME,
  FILTERED_SEARCHED_GAMES,
} from "../actions/types";

const initialState = {
  games: [],
  filter: [],
  currentSearch: [],
  filteredSearch: [],
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
    case FILTERED_SEARCHED_GAMES:
      return {
        ...state,
        filteredSearch: action.payload,
      };
    default:
      return state;
  }
}
