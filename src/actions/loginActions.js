import axios from "axios";
import { BASE_URL, LOCAL_BASE_URL, AUTH_TOKEN } from "../config";

// LOGIN_USER, LOGIN_USER_SUCCESS, LOGIN_USER_FAILURE
export const LOGIN_USER = "LOGIN_USER";
export const LOGIN_USER_SUCCESS = "LOGIN_USER_SUCCESS";
export const LOGIN_USER_FAILURE = "LOGIN_USER_FAILURE";

export const doLogin = creds => dispatch => {
  const { username, password } = creds;

  dispatch({
    type: LOGIN_USER
  });

  axios
    .post(`${LOCAL_BASE_URL}/login/`, { username, password })
    .then(res => {
      localStorage.setItem(AUTH_TOKEN, res.data.key);
      dispatch({
        type: LOGIN_USER_SUCCESS,
        payload: res.data.key
      });
    })
    .catch(err => {
      console.log("ERROR LOGGING IN:\n", err);
      dispatch({
        type: LOGIN_USER_FAILURE,
        error: err
      });
    });
};

// REGISTER_USER, REGISTER_USER_SUCCESS, REGISTER_USER_FAILURE
export const REGISTER_USER = "REGISTER_USER";
export const REGISTER_USER_SUCCESS = "REGISTER_USER_SUCCESS";
export const REGISTER_USER_FAILURE = "REGISTER_USER_FAILURE";

export const doRegister = creds => dispatch => {
  const { username, password1, password2 } = creds;
  console.log({ username, password1, password2 });
  dispatch({
    type: REGISTER_USER
  });

  axios
    .post(`${LOCAL_BASE_URL}/registration/`, { username, password1, password2 })
    .then(res => {
      localStorage.setItem(AUTH_TOKEN, res.data.key);
      dispatch({
        type: REGISTER_USER_SUCCESS,
        payload: res.data.key
      });
    })
    .catch(err => {
      console.log("ERROR REGISTERING NEW USER:\n", err);
      dispatch({
        type: REGISTER_USER_FAILURE,
        error: err
      });
    });
};
