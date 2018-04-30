import produce from 'immer';

import * as types from '../constants/wizard.types';

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
    case types.SET_SCHOOL_TYPE:
      return { ...state, schoolType: action.schoolType };
    case types.SET_GROUPS_COUNT:
      return { ...state, groupsCount: action.count };
    case types.ADD_SUBJECT:
      return produce(state, (draft) => {
        if (!state.subjects.includes(action.subjectName)) {
          draft.subjects.push(action.subjectName);
        }
      });
    case types.REMOVE_SUBJECT:
      return { ...state, subjects: state.subjects.filter(el => el !== action.subjectName) };
    case types.ADD_GROUP:
      return produce(state, (draft) => {
        if (!state.groupNames.includes(action.groupName)) {
          draft.groupNames.push(action.groupName);
          draft.groups[action.groupName] = [];
        }
      });
    case types.ADD_TIMESLOT:
      return produce(state, (draft) => {
        if (!state.timeslots.includes(action.timeslot)) {
          draft.timeslots.push(action.timeslot);
        }
      });
    case types.REMOVE_TIMESLOT:
      return {
        ...state,
        timeslots: state.timeslots.filter(el => el !== action.timeslot),
      };
    case types.GENERATE_GROUPS_STARTED:
      return { ...state, isGenerating: true };
    case types.GENERATE_GROUPS_FINISHED:
      return {
        ...state,
        isGenerating: false,
        groups: action.groups,
        groupNames: action.groupNames,
      };
    case types.ADD_SUBJECT_TO_GROUP:
      return produce(state, (draft) => {
        if (!state.groups[action.groupName].includes(action.subjectName)) {
          draft.groups[action.groupName].push(action.subjectName);
        }
      });
    case types.REMOVE_SUBJECT_FROM_GROUP:
      return produce(state, (draft) => {
        const filtered = state.groups[action.groupName].filter(el => el !== action.subjectName);
        draft.groups[action.groupName] = filtered;
      });
    default:
      return state;
  }
};

export default wizard;
