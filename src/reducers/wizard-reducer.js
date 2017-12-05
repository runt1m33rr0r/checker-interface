import {
  SET_SCHOOL_TYPE,
  ADD_SUBJECT,
  REMOVE_SUBJECT,
  ADD_TIMESLOT,
  REMOVE_TIMESLOT,
  SET_GROUPS_COUNT,
} from '../constants/action-types';

const wizard = (
  state = {
    schoolType: 'gymnasium',
    groupsCount: 6,
    subjects: [],
    timeslots: [],
  },
  action,
) => {
  switch (action.type) {
    case SET_SCHOOL_TYPE:
      return { ...state, schoolType: action.schoolType };
    case SET_GROUPS_COUNT:
      return { ...state, groupsCount: action.count };
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
    case ADD_TIMESLOT:
      if (state.timeslots.includes(action.timeslot)) {
        return state;
      }

      return {
        ...state,
        timeslots: [...state.timeslots, action.timeslot],
      };
    case REMOVE_TIMESLOT:
      return {
        ...state,
        timeslots: state.timeslots.filter(timeslot => timeslot !== action.timeslot),
      };
    default:
      return state;
  }
};

export default wizard;
