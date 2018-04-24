import { GET_ABSENCES_SUCCESS } from '../constants/user.types';

const auth = (
  state = {
    absences: [],
  },
  action,
) => {
  switch (action.type) {
    case GET_ABSENCES_SUCCESS:
      return { ...state, absences: action.absences };
    default:
      return state;
  }
};

export default auth;
