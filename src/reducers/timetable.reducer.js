import {
  FETCH_SUBJECTS_SUCCESS,
  FETCH_GROUPS_SUCCESS,
  FETCH_LESSONS_SUCCESS,
  FETCH_TIMESLOTS_SUCCESS,
  FETCH_TEACHERS_SUCCESS,
} from '../constants/action.types';

const timetable = (
  state = {
    lessons: [],
    subjectCodes: [],
    groupNames: [],
    timeslots: [],
    teachers: [],
  },
  action,
) => {
  switch (action.type) {
    case FETCH_LESSONS_SUCCESS:
      return { ...state, lessons: action.lessons };
    case FETCH_SUBJECTS_SUCCESS:
      return { ...state, subjectCodes: action.subjectCodes };
    case FETCH_GROUPS_SUCCESS:
      return { ...state, groupNames: action.groupNames };
    case FETCH_TIMESLOTS_SUCCESS:
      return { ...state, timeslots: action.timeslots };
    case FETCH_TEACHERS_SUCCESS:
      return { ...state, teachers: action.teachers };
    default:
      return state;
  }
};

export default timetable;
