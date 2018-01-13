import { SET_TITLE } from '../constants/action-types';

const ui = (state = { title: 'Home' }, action) => {
  switch (action.type) {
    case SET_TITLE:
      return { ...state, title: action.title };
    default:
      return state;
  }
};

export default ui;
