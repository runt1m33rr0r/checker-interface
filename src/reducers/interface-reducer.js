import { SET_PAGE_TITLE } from '../constants/action-types';

const initialState = {
  title: 'Home',
};

const userInterface = (state = initialState, action) => {
  switch (action.type) {
    case SET_PAGE_TITLE:
      return { ...state, title: action.title };
    default:
      return { ...state };
  }
};

export default userInterface;
