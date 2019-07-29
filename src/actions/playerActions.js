import axios from "axios";
import { BASE_URL, getAuthHeaders } from "../config";

// INIT_PLAYER, INIT_PLAYER_SUCCESS, INIT_PLAYER_FAILURE
export const INIT_PLAYER = "INIT_PLAYER";
export const INIT_PLAYER_SUCCESS = "INIT_PLAYER_SUCCESS";
export const INIT_PLAYER_FAILURE = "INIT_PLAYER_FAILURE";

export const initializePlayer = () => dispatch => {
  dispatch({
    type: INIT_PLAYER
  });

  axios
    .get(`${BASE_URL}/adv/init`, getAuthHeaders())
    .then(res => {
      dispatch({
        type: INIT_PLAYER_SUCCESS,
        payload: res
      });
    })
    .catch(err => {
      dispatch({
        type: INIT_PLAYER_FAILURE,
        error: err
      });
    });
};

// MOVE_PLAYER, MOVE_PLAYER_SUCCESS, MOVE_PLAYER_FAILURE
export const MOVE_PLAYER = "MOVE_PLAYER";
export const MOVE_PLAYER_SUCCESS = "MOVE_PLAYER_SUCCESS";
export const MOVE_PLAYER_FAILURE = "MOVE_PLAYER_FAILURE";

export const movePlayer = direction => dispatch => {
  if (!["n", "s", "e", "w"].includes(direction)) {
    throw new Error("That is not a valid move");
  }

  dispatch({
    type: MOVE_PLAYER
  });

  axios
    .post(`${BASE_URL}/adv/move`, { direction }, getAuthHeaders())
    .then(res => {
      dispatch({
        type: MOVE_PLAYER_SUCCESS,
        payload: res
      });
    })
    .catch(err => {
      dispatch({
        type: MOVE_PLAYER_FAILURE,
        error: err
      });
    });
};
