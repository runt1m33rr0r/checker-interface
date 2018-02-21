import { CHECK_SETUP_SUCCESS, RESET_SETUP_SUCCESS } from '../constants/action-types';

const system = (state = { setupFinished: false }, action) => {
  switch (action.type) {
    case CHECK_SETUP_SUCCESS:
      return { ...state, setupFinished: action.setupFinished };
    case RESET_SETUP_SUCCESS:
      return { ...state, setupFinished: false };
    default:
      return state;
  }
};

export default system;
