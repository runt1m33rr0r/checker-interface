import * as types from '../constants/timetable.types';

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
    case types.FETCH_LESSONS_SUCCESS:
      return { ...state, lessons: action.lessons };
    case types.FETCH_SUBJECTS_SUCCESS:
      return { ...state, subjectCodes: action.subjectCodes };
    case types.FETCH_GROUPS_SUCCESS:
      return { ...state, groupNames: action.groupNames };
    case types.FETCH_TIMESLOTS_SUCCESS:
      return { ...state, timeslots: action.timeslots };
    case types.FETCH_TEACHERS_SUCCESS:
      return { ...state, teachers: action.teachers };
    default:
      return state;
  }
};

export default timetable;
