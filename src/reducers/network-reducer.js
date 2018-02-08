import {
  NETWORK_STARTS,
  NETWORK_SUCCESSES,
  NETWORK_FAILURES,
  RESET_MESSAGE,
} from '../constants/action-types';

const network = (state = { isFetching: false, message: '' }, action) => {
  const { type } = action;

  if (NETWORK_STARTS.includes(type)) {
    return { ...state, message: '', isFetching: true };
  } else if (NETWORK_FAILURES.includes(type)) {
    return { ...state, message: action.message, isFetching: false };
  } else if (NETWORK_SUCCESSES.includes(type)) {
    return { ...state, message: '', isFetching: false };
  }

  switch (type) {
    case RESET_MESSAGE:
      return { ...state, message: '' };
    default:
      return state;
  }
};

export default network;
