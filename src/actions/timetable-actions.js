import axios from 'axios';

import {
  GENERATE_TIMETABLE,
  GENERATE_TIMETABLE_SUCCESS,
  GENERATE_TIMETABLE_FAILURE,
  FETCH_SUBJECTS,
  FETCH_SUBJECTS_SUCCESS,
  FETCH_SUBJECTS_FAILURE,
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
        return dispatch({ type: GENERATE_TIMETABLE_SUCCESS, timetable: response.data.timetable });
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
