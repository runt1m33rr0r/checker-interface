import {
  SET_SCHOOL_TYPE,
  ADD_SUBJECT,
  REMOVE_SUBJECT,
  ADD_TIMESLOT,
  REMOVE_TIMESLOT,
  SET_GROUPS_COUNT,
  ADD_SUBJECT_TO_GROUP,
  REMOVE_SUBJECT_FROM_GROUP,
  GENERATE_GROUPS_STARTED,
  GENERATE_GROUPS_FINISHED,
} from '../constants/action-types';

const wizard = (
  state = {
    generating: false,
    schoolType: 'gymnasium',
    groupsCount: 6,
    subjects: [],
    timeslots: [],
    groups: [],
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
    case GENERATE_GROUPS_STARTED:
      return { ...state, generating: true };
    case GENERATE_GROUPS_FINISHED:
      return { ...state, generating: false, groups: action.groups };
    case ADD_SUBJECT_TO_GROUP:
      return {
        ...state,
        groups: state.groups.map((group) => {
          if (group.name !== action.groupName) {
            return group;
          }
          return {
            ...group,
            subjects: [...group.subjects, action.subjectName],
          };
        }),
      };
    case REMOVE_SUBJECT_FROM_GROUP:
      return {
        ...state,
        groups: state.groups.map((group) => {
          if (group.name !== action.groupName) {
            return group;
          }
          return {
            ...group,
            subjects: group.subjects.filter(subject => subject !== action.subjectName),
          };
        }),
      };
    default:
      return state;
  }
};

export default wizard;
