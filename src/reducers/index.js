import { combineReducers } from "redux";
import naijaKidsReducer from "./naijaKidsReducer";

export default combineReducers({
  naijaKids: naijaKidsReducer,
});
