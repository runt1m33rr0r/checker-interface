import axios from 'axios';
import {
  SET_SCHOOL_TYPE,
  ADD_SUBJECT,
  REMOVE_SUBJECT,
  ADD_TIMESLOT,
  REMOVE_TIMESLOT,
  SET_GROUPS_COUNT,
  GENERATE_GROUPS_STARTED,
  GENERATE_GROUPS_FINISHED,
  ADD_SUBJECT_TO_GROUP,
  REMOVE_SUBJECT_FROM_GROUP,
  FINISH_WIZARD,
  FINISH_WIZARD_SUCCESS,
  FINISH_WIZARD_FAILURE,
} from '../constants/action-types';
import ENDPOINT from '../constants/api-constants';

export const setSchoolType = type => ({
  type: SET_SCHOOL_TYPE,
  schoolType: type,
});

export const setGroupsCount = count => ({
  type: SET_GROUPS_COUNT,
  count,
});

export const addSubject = subjectName => ({
  type: ADD_SUBJECT,
  subjectName,
});

export const removeSubject = subjectName => ({
  type: REMOVE_SUBJECT,
  subjectName,
});

export const addTimeslot = timeslot => ({
  type: ADD_TIMESLOT,
  timeslot,
});

export const removeTimeslot = timeslot => ({
  type: REMOVE_TIMESLOT,
  timeslot,
});

export const generateGroups = (schoolType, groupsCount) => (dispatch) => {
  dispatch({ type: GENERATE_GROUPS_STARTED });

  const groups = {};
  const groupNames = [];
  const letters = ['А', 'Б', 'В', 'Г', 'Д', 'Е', 'Ж', 'З', 'И'];
  const startGrade = schoolType === 'gymnasium' ? 8 : 1;
  const endGrade = schoolType === 'gymnasium' ? 12 : 7;

  for (let grade = startGrade; grade <= endGrade; grade += 1) {
    for (let groupIdx = 1; groupIdx <= groupsCount && groupIdx < letters.length; groupIdx += 1) {
      const name = `${grade}${letters[groupIdx - 1]}`;
      groups[name] = [];
      groupNames.push(name);
    }
  }

  dispatch({
    type: GENERATE_GROUPS_FINISHED,
    groups,
    groupNames,
  });
};

export const addSubjectToGroup = (groupName, subjectName) => ({
  type: ADD_SUBJECT_TO_GROUP,
  groupName,
  subjectName,
});

export const removeSubjectFromGroup = (groupName, subjectName) => ({
  type: REMOVE_SUBJECT_FROM_GROUP,
  groupName,
  subjectName,
});

export const finishWizard = (timeslots, subjects, groups) => (dispatch) => {
  dispatch({ type: FINISH_WIZARD });
  const token = localStorage.getItem('token');
  return axios
    .post(
      `${ENDPOINT}/api/school/settings/base`,
      {
        timeslots,
        groups,
        subjects,
      },
      { headers: { 'x-access-token': token } },
    )
    .then((response) => {
      if (!response.data.success) {
        dispatch({ type: FINISH_WIZARD_FAILURE, message: response.data.message });
      } else {
        dispatch({ type: FINISH_WIZARD_SUCCESS });
      }
    })
    .catch((err) => {
      dispatch({ type: FINISH_WIZARD_FAILURE, message: err.message });
    });
};
