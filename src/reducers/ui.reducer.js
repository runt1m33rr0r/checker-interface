import { SET_TITLE, SET_DARK_MODE } from '../constants/action.types';

const ui = (state = { title: 'Home', dark: false }, action) => {
  switch (action.type) {
    case SET_TITLE:
      return { ...state, title: action.title };
    case SET_DARK_MODE:
      return { ...state, dark: action.dark };
    default:
      return state;
  }
};

export default ui;
