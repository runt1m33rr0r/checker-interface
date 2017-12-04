import { SET_SCHOOL_TYPE, ADD_SUBJECT, REMOVE_SUBJECT } from '../constants/action-types';

const wizard = (
  state = {
    schoolType: 'gymnasium',
    subjects: [],
  },
  action,
) => {
  switch (action.type) {
    case SET_SCHOOL_TYPE:
      return Object.assign({}, state, {
        schoolType: action.schoolType,
      });
    case ADD_SUBJECT:
      if (state.subjects.includes(action.subjectName)) {
        return state;
      }

      return {
        ...state,
        subjects: [...state.subjects, action.subjectName],
      };
    case REMOVE_SUBJECT:
      return {
        ...state,
        subjects: state.subjects.filter(subject => subject !== action.subjectName),
      };
    default:
      return state;
  }
};

export default wizard;
