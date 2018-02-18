import { makeRequest } from '../api';
import {
  GENERATE_TIMETABLE,
  GENERATE_TIMETABLE_SUCCESS,
  GENERATE_TIMETABLE_FAILURE,
  FETCH_SUBJECTS,
  FETCH_SUBJECTS_SUCCESS,
  FETCH_SUBJECTS_FAILURE,
  FETCH_GROUPS,
  FETCH_GROUPS_SUCCESS,
  FETCH_GROUPS_FAILURE,
  FETCH_LESSONS,
  FETCH_LESSONS_SUCCESS,
  FETCH_LESSONS_FAILURE,
} from '../constants/action-types';
import ENDPOINT from '../constants/api-constants';

export const generateTimetable = () => (dispatch) => {
  dispatch({ type: GENERATE_TIMETABLE });
  const token = localStorage.getItem('token');
  makeRequest({
    url: `${ENDPOINT}/api/school/settings/timetable/generate`,
    method: 'post',
    token,
    data: {},
    dispatch,
  })
    .then(() => dispatch({ type: GENERATE_TIMETABLE_SUCCESS }))
    .catch(err => dispatch({ type: GENERATE_TIMETABLE_FAILURE, message: err.message }));
};

export const fetchSubjects = () => (dispatch) => {
  dispatch({ type: FETCH_SUBJECTS });
  makeRequest({
    url: `${ENDPOINT}/api/subjects`,
    method: 'get',
    dispatch,
  })
    .then(data => dispatch({ type: FETCH_SUBJECTS_SUCCESS, subjectCodes: data.subjectCodes }))
    .catch(err => dispatch({ type: FETCH_SUBJECTS_FAILURE, message: err.message }));
};

export const fetchGroups = () => (dispatch) => {
  dispatch({ type: FETCH_GROUPS });
  makeRequest({
    url: `${ENDPOINT}/api/groups`,
    method: 'get',
    dispatch,
  })
    .then(data => dispatch({ type: FETCH_GROUPS_SUCCESS, groupNames: data.groupNames }))
    .catch(err => dispatch({ type: FETCH_GROUPS_FAILURE, message: err.message }));
};

export const fetchLessons = groupName => (dispatch) => {
  dispatch({ type: FETCH_LESSONS });
  const token = localStorage.getItem('token');
  makeRequest({
    url: `${ENDPOINT}/api/groups/${groupName}/lessons`,
    method: 'get',
    token,
    dispatch,
  })
    .then(data => dispatch({ type: FETCH_LESSONS_SUCCESS, lessons: data.lessons }))
    .catch(err => dispatch({ type: FETCH_LESSONS_FAILURE, message: err.message }));
};
