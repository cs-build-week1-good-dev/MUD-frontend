import { combineReducers } from "redux";
import loginReducer from "./loginReducer";
import playerReducer from "./playerReducer";

export default combineReducers({
  login: loginReducer,
  player: playerReducer
});
