import * as types from '../constants/network.types';

const network = (state = { isFetching: false, message: '' }, action) => {
  switch (action.type) {
    case types.NETWORK_START:
      return { ...state, message: '', isFetching: true };
    case types.NETWORK_SUCCESS:
      return { ...state, message: '', isFetching: false };
    case types.NETWORK_FAILURE:
      return { ...state, message: action.message, isFetching: false };
    case types.RESET_MESSAGE:
      return { ...state, message: '' };
    case types.SET_MESSAGE:
      return { ...state, message: action.message };
    default:
      return state;
  }
};

export default network;
