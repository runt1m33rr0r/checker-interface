import * as actions from '../constants/action.types';
import { addToArray, removeFromArray, addToArrayInObj, removeFromArrayInObj } from './utils';

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
    case actions.SET_SCHOOL_TYPE:
      return { ...state, schoolType: action.schoolType };
    case actions.SET_GROUPS_COUNT:
      return { ...state, groupsCount: action.count };
    case actions.ADD_SUBJECT:
      return {
        ...state,
        subjects: addToArray(state.subjects, action.subjectName),
      };
    case actions.REMOVE_SUBJECT:
      return {
        ...state,
        subjects: removeFromArray(state.subjects, action.subjectName),
      };
    case actions.ADD_GROUP:
      return {
        ...state,
        groupNames: addToArray(state.groupNames, action.groupName),
        groups: { ...state.groups, [action.groupName]: [] },
      };
    case actions.ADD_TIMESLOT:
      return {
        ...state,
        timeslots: addToArray(state.timeslots, action.timeslot),
      };
    case actions.REMOVE_TIMESLOT:
      return {
        ...state,
        timeslots: removeFromArray(state.timeslots, action.timeslot),
      };
    case actions.GENERATE_GROUPS_STARTED:
      return { ...state, isGenerating: true };
    case actions.GENERATE_GROUPS_FINISHED:
      return {
        ...state,
        isGenerating: false,
        groups: action.groups,
        groupNames: action.groupNames,
      };
    case actions.ADD_SUBJECT_TO_GROUP:
      return {
        ...state,
        groups: addToArrayInObj(state.groups, action.groupName, action.subjectName),
      };
    case actions.REMOVE_SUBJECT_FROM_GROUP:
      return {
        ...state,
        groups: removeFromArrayInObj(state.groups, action.groupName, action.subjectName),
      };
    default:
      return state;
  }
};

export default wizard;
