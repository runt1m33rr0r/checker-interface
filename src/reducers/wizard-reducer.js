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
  FINISH_WIZARD,
} from '../constants/action-types';
import {
  addToArray,
  removeFromArray,
  addToArrayInObj,
  removeFromArrayInObj,
  addObjToArray,
  removeObjFromArray,
} from './utils';

const wizard = (
  state = {
    isGenerating: false,
    schoolType: 'gymnasium',
    groupsCount: 6,
    subjects: [],
    timeslots: [],
    groupNames: [],
    groups: {},
  },
  action,
) => {
  switch (action.type) {
    case SET_SCHOOL_TYPE:
      return { ...state, schoolType: action.schoolType };
    case SET_GROUPS_COUNT:
      return { ...state, groupsCount: action.count };
    case ADD_SUBJECT:
      return {
        ...state,
        subjects: addToArray(state.subjects, action.subjectName),
      };
    case REMOVE_SUBJECT:
      return {
        ...state,
        subjects: removeFromArray(state.subjects, action.subjectName),
      };
    case ADD_TIMESLOT:
      return {
        ...state,
        timeslots: addObjToArray(state.timeslots, {
          fromHour: action.fromHour,
          fromMinute: action.fromMinute,
          toHour: action.toHour,
          toMinute: action.toMinute,
          day: action.day,
        }),
      };
    case REMOVE_TIMESLOT:
      return {
        ...state,
        timeslots: removeObjFromArray(state.timeslots, {
          fromHour: action.fromHour,
          fromMinute: action.fromMinute,
          toHour: action.toHour,
          toMinute: action.toMinute,
          day: action.day,
        }),
      };
    case GENERATE_GROUPS_STARTED:
      return { ...state, isGenerating: true };
    case GENERATE_GROUPS_FINISHED:
      return {
        ...state,
        isGenerating: false,
        groups: action.groups,
        groupNames: action.groupNames,
      };
    case ADD_SUBJECT_TO_GROUP:
      return {
        ...state,
        groups: addToArrayInObj(state.groups, action.groupName, action.subjectName),
      };
    case REMOVE_SUBJECT_FROM_GROUP:
      return {
        ...state,
        groups: removeFromArrayInObj(state.groups, action.groupName, action.subjectName),
      };
    case FINISH_WIZARD:
      return {
        ...state,
        subjects: [],
        timeslots: [],
        groupNames: [],
        groups: {},
      };
    default:
      return state;
  }
};

export default wizard;
