import {
  FETCH_SUBJECTS_SUCCESS,
  FETCH_GROUPS_SUCCESS,
  FETCH_LESSONS_SUCCESS,
} from '../constants/action-types';

const timetable = (state = { lessons: [], subjectCodes: [], groupNames: [] }, action) => {
  switch (action.type) {
    case FETCH_LESSONS_SUCCESS:
      return { ...state, lessons: action.lessons };
    case FETCH_SUBJECTS_SUCCESS:
      return { ...state, subjectCodes: action.subjectCodes };
    case FETCH_GROUPS_SUCCESS:
      return { ...state, groupNames: action.groupNames };
    default:
      return state;
  }
};

export default timetable;
