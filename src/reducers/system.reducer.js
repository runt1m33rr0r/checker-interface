import {
  CHECK_SETUP_SUCCESS,
  RESET_SETUP_SUCCESS,
  FETCH_FREE_SUBJECTS_SUCCESS,
  FETCH_TEACHERS_COUNT_SUCCESS,
  FETCH_STUDENTS_COUNT_SUCCESS,
  FETCH_GROUPS_COUNT_SUCCESS,
  FETCH_SUBJECTS_COUNT_SUCCESS,
} from '../constants/action.types';

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
    case CHECK_SETUP_SUCCESS:
      return { ...state, setupFinished: action.setupFinished };
    case RESET_SETUP_SUCCESS:
      return { ...state, setupFinished: false };
    case FETCH_FREE_SUBJECTS_SUCCESS:
      return { ...state, freeSubjects: action.freeSubjects };
    case FETCH_TEACHERS_COUNT_SUCCESS:
      return { ...state, teachersCount: action.count };
    case FETCH_STUDENTS_COUNT_SUCCESS:
      return { ...state, studentsCount: action.count };
    case FETCH_GROUPS_COUNT_SUCCESS:
      return { ...state, groupsCount: action.count };
    case FETCH_SUBJECTS_COUNT_SUCCESS:
      return { ...state, subjectsCount: action.count };

    default:
      return state;
  }
};

export default system;
