import {
  INIT_PLAYER,
  INIT_PLAYER_SUCCESS,
  INIT_PLAYER_FAILURE,
  MOVE_PLAYER,
  MOVE_PLAYER_SUCCESS,
  MOVE_PLAYER_FAILURE,
  GET_ROOMS,
  GET_ROOMS_SUCCESS,
  GET_ROOMS_FAILURE
} from "../actions";

const initialState = {
  error: null,
  uuid: "",
  name: "",
  title: "",
  description: "",
  players: [],
  gettingRoom: false,
  movingPlayer: false,
  rooms: [],
  gettingRooms: false
};

export default (state = initialState, action) => {
  switch (action.type) {
    case INIT_PLAYER:
      return {
        ...state,
        gettingRoom: true,
        error: null
      };
    case INIT_PLAYER_SUCCESS:
      return {
        ...state,
        ...action.payload,
        gettingRoom: false,
        error: null
      };
    case INIT_PLAYER_FAILURE:
      return {
        ...state,
        gettingRoom: false,
        error: action.payload
      };
    case MOVE_PLAYER:
      return {
        ...state,
        movingPlayer: true,
        error: null
      };
    case MOVE_PLAYER_SUCCESS:
      return {
        ...state,
        ...action.payload,
        movingPlayer: false,
        error: null
      };
    case MOVE_PLAYER_FAILURE:
      return {
        ...state,
        movingPlayer: false,
        error: action.payload
      };
    case GET_ROOMS:
      return {
        ...state,
        gettingRooms: true,
        error: null
      };
    case GET_ROOMS_SUCCESS:
      return {
        ...state,
        gettingRooms: false,
        error: null,
        rooms: action.payload
      };
    case GET_ROOMS_FAILURE:
      return {
        ...state,
        gettingRooms: false,
        error: action.payload
      };
    default:
      return state;
  }
};
