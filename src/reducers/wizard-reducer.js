import { Set, Map, fromJS } from 'immutable';

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
  state = Map({
    generating: false,
    schoolType: 'gymnasium',
    groupsCount: 6,
    subjects: Set(),
    timeslots: Set(),
    groups: Map(),
  }),
  action,
) => {
  switch (action.type) {
    case SET_SCHOOL_TYPE:
      return state.set('schoolType', action.schoolType);
    case SET_GROUPS_COUNT:
      return state.set('groupsCount', action.schoolType);
    case ADD_SUBJECT:
      return state.update('subjects', subjects => subjects.add(action.subjectName));
    case REMOVE_SUBJECT:
      return state.update('subjects', subjects => subjects.delete(action.subjectName));
    case ADD_TIMESLOT:
      return state.update('timeslots', timeslots => timeslots.add(action.timeslot));
    case REMOVE_TIMESLOT:
      return state.update('timeslots', timeslots => timeslots.delete(action.timeslot));
    case GENERATE_GROUPS_STARTED:
      return state.set('generating', true);
    case GENERATE_GROUPS_FINISHED:
      return state.merge({ generating: false, groups: fromJS(action.groups) });
    case ADD_SUBJECT_TO_GROUP:
      return state.updateIn(['groups', action.groupName], value => value.push(action.subjectName));
    case REMOVE_SUBJECT_FROM_GROUP:
      return state.updateIn(['groups', action.groupName], value =>
        value.delete(value.indexOf(action.subjectName)),
      );
    default:
      return state;
  }
};

export default wizard;
