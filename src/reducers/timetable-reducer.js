import { GENERATE_TIMETABLE_SUCCESS, FETCH_SUBJECTS_SUCCESS } from '../constants/action-types';

const timetable = (state = { timetable: {}, subjects: [] }, action) => {
  switch (action.type) {
    case GENERATE_TIMETABLE_SUCCESS:
      return { ...state, timetable: action.timetable };
    case FETCH_SUBJECTS_SUCCESS:
      return { ...state, subjects: action.subjects };
    default:
      return state;
  }
};

export default timetable;
