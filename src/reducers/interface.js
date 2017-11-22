import { SET_PAGE_TITLE } from '../constants/ActionTypes';

const initialState = {
  title: 'Home',
};

const userInterface = (state = initialState, action) => {
  switch (action.type) {
    case SET_PAGE_TITLE:
      return Object.assign({}, state, {
        title: action.payload,
      });
    default:
      return {
        ...state,
      };
  }
};

export default userInterface;
