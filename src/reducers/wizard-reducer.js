import { SET_SCHOOL_TYPE } from '../constants/action-types';

const wizard = (
  state = {
    schoolType: 'gymnasium',
  },
  action,
) => {
  switch (action.type) {
    case SET_SCHOOL_TYPE:
      return Object.assign({}, state, {
        schoolType: action.schoolType,
      });
    default:
      return state;
  }
};

export default wizard;
