import {
  NETWORK_START,
  NETWORK_SUCCESS,
  NETWORK_FAILURE,
  RESET_MESSAGE,
} from '../constants/action-types';

const network = (state = { isFetching: false, message: '' }, action) => {
  switch (action.type) {
    case NETWORK_START:
      return { ...state, message: '', isFetching: true };
    case NETWORK_SUCCESS:
      return { ...state, message: '', isFetching: false };
    case NETWORK_FAILURE:
      return { ...state, message: action.message, isFetching: false };
    case RESET_MESSAGE:
      return { ...state, message: '' };
    default:
      return state;
  }
};

export default network;
