import { combineReducers } from "redux";
import loginReducer from "./projectsReducer";

export default combineReducers({
  login: loginReducer
});
