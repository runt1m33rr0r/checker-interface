import {
  GENERATE_TIMETABLE_SUCCESS,
  FETCH_SUBJECTS_SUCCESS,
  FETCH_GROUPS_SUCCESS,
} from '../constants/action-types';

const timetable = (state = { lessons: [], subjects: [], groups: [] }, action) => {
  switch (action.type) {
    case GENERATE_TIMETABLE_SUCCESS:
      return { ...state, lessons: action.lessons };
    case FETCH_SUBJECTS_SUCCESS:
      return { ...state, subjects: action.subjects };
    case FETCH_GROUPS_SUCCESS:
      return { ...state, groups: action.groups };
    default:
      return state;
  }
};

export default timetable;
