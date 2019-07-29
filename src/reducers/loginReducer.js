import {
  LOGIN_USER,
  LOGIN_USER_SUCCESS,
  LOGIN_USER_FAILURE,
  REGISTER_USER,
  REGISTER_USER_SUCCESS,
  REGISTER_USER_FAILURE
} from "../actions";

const initialState = {
  loggingIn: false,
  registeringUser: true,
  error: null,
  token: null
};

export default (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_USER:
      return {
        ...state,
        loggingIn: true,
        error: null,
        token: null
      };
    case LOGIN_USER_SUCCESS:
      return {
        ...state,
        loggingIn: false,
        error: null,
        token: action.payload
      };
    case LOGIN_USER_FAILURE:
      return {
        ...state,
        loggingIn: false,
        error: action.payload
      };
    case REGISTER_USER:
      return {
        ...state,
        registeringUser: true,
        error: null,
        token: null
      };
    case REGISTER_USER_SUCCESS:
      return {
        ...state,
        registeringUser: false,
        error: null,
        token: action.payload
      };
    case REGISTER_USER_FAILURE:
      return {
        ...state,
        registeringUser: false,
        error: action.payload
      };
    default:
      return state;
  }
};
