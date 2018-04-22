import * as types from '../constants/system.types';

const system = (
  state = {
    setupFinished: false,
    freeSubjects: [],
    teachersCount: 0,
    studentsCount: 0,
    groupsCount: 0,
    subjectsCount: 0,
  },
  action,
) => {
  switch (action.type) {
    case types.CHECK_SETUP_SUCCESS:
      return { ...state, setupFinished: action.setupFinished };
    case types.RESET_SETUP_SUCCESS:
      return { ...state, setupFinished: false };
    case types.FETCH_FREE_SUBJECTS_SUCCESS:
      return { ...state, freeSubjects: action.freeSubjects };
    case types.FETCH_TEACHERS_COUNT_SUCCESS:
      return { ...state, teachersCount: action.count };
    case types.FETCH_STUDENTS_COUNT_SUCCESS:
      return { ...state, studentsCount: action.count };
    case types.FETCH_GROUPS_COUNT_SUCCESS:
      return { ...state, groupsCount: action.count };
    case types.FETCH_SUBJECTS_COUNT_SUCCESS:
      return { ...state, subjectsCount: action.count };

    default:
      return state;
  }
};

export default system;
