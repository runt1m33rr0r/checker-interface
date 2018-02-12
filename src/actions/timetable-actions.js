import axios from 'axios';

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
} from '../constants/action-types';
import ENDPOINT from '../constants/api-constants';

export const generateTimetable = () => (dispatch) => {
  dispatch({ type: GENERATE_TIMETABLE });
  const token = localStorage.getItem('token');

  axios
    .post(
      `${ENDPOINT}/api/school/settings/timetable/generate`,
      {},
      { headers: { Authorization: `Bearer ${token}` } },
    )
    .then((response) => {
      if (response.data.success) {
        return dispatch({ type: GENERATE_TIMETABLE_SUCCESS, lessons: response.data.lessons });
      }
      return dispatch({ type: GENERATE_TIMETABLE_FAILURE, message: response.data.message });
    })
    .catch(err => dispatch({ type: GENERATE_TIMETABLE_FAILURE, message: err.message }));
};

export const fetchSubjects = () => (dispatch) => {
  dispatch({ type: FETCH_SUBJECTS });
  axios
    .get(`${ENDPOINT}/api/subjects`)
    .then((response) => {
      if (response.data.success) {
        return dispatch({ type: FETCH_SUBJECTS_SUCCESS, subjects: response.data.subjects });
      }
      return dispatch({ type: FETCH_SUBJECTS_FAILURE, message: response.data.message });
    })
    .catch(err => dispatch({ type: FETCH_SUBJECTS_FAILURE, message: err.message }));
};

export const fetchGroups = () => (dispatch) => {
  dispatch({ type: FETCH_GROUPS });
  axios
    .get(`${ENDPOINT}/api/groups`)
    .then((response) => {
      if (response.data.success) {
        return dispatch({ type: FETCH_GROUPS_SUCCESS, groups: response.data.groups });
      }
      return dispatch({ type: FETCH_GROUPS_FAILURE, message: response.data.message });
    })
    .catch(err => dispatch({ type: FETCH_GROUPS_FAILURE, message: err.message }));
};
