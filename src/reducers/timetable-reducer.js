import { GENERATE_TIMETABLE_SUCCESS } from '../constants/action-types';

const timetable = (state = { timetable: {} }, action) => {
  switch (action.type) {
    case GENERATE_TIMETABLE_SUCCESS:
      return { ...state, timetable: action.timetable };
    default:
      return state;
  }
};

export default timetable;
