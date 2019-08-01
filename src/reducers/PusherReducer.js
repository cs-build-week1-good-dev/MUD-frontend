import {
  PUSHER_SEND_START,
  PUSHER_SEND_SUCCESS,
  PUSHER_SEND_FAILURE
} from "../actions";

const initialState = {
  pusherFetch: false,
  pusherSuccess: false,
  pusherFailure: false,
  error: ""
};

export const PusherReducer = (state = initialState, action) => {
  switch (action.type) {
    case PUSHER_SEND_START:
      return {
        ...state,
        pusherFetch: true,
        pusherSuccess: false,
        pusherFailure: false
      };

    case PUSHER_SEND_SUCCESS:
      return {
        ...state,
        pusherFetch: false,
        pusherSuccess: true,
        pusherFailure: false,
        data: action.payload
      };

    case PUSHER_SEND_FAILURE:
      return {
        ...state,
        pusherFetch: false,
        pusherSuccess: false,
        pusherFailure: true,
        error: action.payload
      };

    default:
      return state;
  }
};
