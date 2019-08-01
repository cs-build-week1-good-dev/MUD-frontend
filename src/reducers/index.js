import { combineReducers } from "redux";
import loginReducer from "./loginReducer";
import playerReducer from "./playerReducer";
import { PusherReducer } from "./PusherReducer";

export default combineReducers({
  login: loginReducer,
  player: playerReducer,
  pusherReducer: PusherReducer
});
