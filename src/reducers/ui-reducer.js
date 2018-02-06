import {
  SET_TITLE,
  LOGIN_FAILURE,
  REGISTER_FAILURE,
  RESET_MESSAGE,
} from '../constants/action-types';

const ui = (state = { title: 'Home', message: '' }, action) => {
  switch (action.type) {
    case SET_TITLE:
      return { ...state, title: action.title };
    case LOGIN_FAILURE || REGISTER_FAILURE:
      return { ...state, message: action.message };
    case RESET_MESSAGE:
      return { ...state, message: '' };
    default:
      return state;
  }
};

export default ui;
