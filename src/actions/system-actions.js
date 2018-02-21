import { makeRequest } from '../api';
import * as actions from '../constants/action-types';
import ENDPOINT from '../constants/api-constants';

export const checkSetup = () => (dispatch) => {
  dispatch({ type: actions.CHECK_SETUP });

  const token = localStorage.getItem('token');
  makeRequest({
    url: `${ENDPOINT}/api/settings/setup`,
    method: 'get',
    token,
    dispatch,
  })
    .then(data =>
      dispatch({ type: actions.CHECK_SETUP_SUCCESS, setupFinished: data.setupFinished }),
    )
    .catch(err => dispatch({ type: actions.CHECK_SETUP_FAILURE, message: err.message }));
};

export const resetSetup = () => (dispatch) => {
  dispatch({ type: actions.RESET_SETUP });

  const token = localStorage.getItem('token');
  makeRequest({
    url: `${ENDPOINT}/api/settings/setup`,
    method: 'post',
    data: { setupFinished: false },
    token,
    dispatch,
  })
    .then(() => dispatch({ type: actions.RESET_SETUP_SUCCESS }))
    .catch(err => dispatch({ type: actions.RESET_SETUP_FAILURE, message: err.message }));
};

export const fetchFreeSubjects = () => (dispatch) => {
  dispatch({ type: actions.FETCH_FREE_SUBJECTS });

  const token = localStorage.getItem('token');
  makeRequest({
    url: `${ENDPOINT}/api/subjects?free=true`,
    method: 'get',
    token,
    dispatch,
  })
    .then(data =>
      dispatch({ type: actions.FETCH_FREE_SUBJECTS_SUCCESS, freeSubjects: data.subjectCodes }),
    )
    .catch(err => dispatch({ type: actions.FETCH_FREE_SUBJECTS_FAILURE, message: err.message }));
};

const fetchCount = (startAction, successAction, failureAction, collectionName) => (dispatch) => {
  dispatch({ type: startAction });

  const token = localStorage.getItem('token');
  makeRequest({
    url: `${ENDPOINT}/api/${collectionName}?count=true`,
    method: 'get',
    token,
    dispatch,
  })
    .then(data => dispatch({ type: successAction, count: data.count }))
    .catch(err => dispatch({ type: failureAction, message: err.message }));
};

export const fetchTeachersCount = () => (dispatch) => {
  dispatch(
    fetchCount(
      actions.FETCH_TEACHERS_COUNT,
      actions.FETCH_TEACHERS_COUNT_SUCCESS,
      actions.FETCH_TEACHERS_COUNT_FAILURE,
      'teachers',
    ),
  );
};

export const fetchStudentsCount = () => (dispatch) => {
  dispatch(
    fetchCount(
      actions.FETCH_STUDENTS_COUNT,
      actions.FETCH_STUDENTS_COUNT_SUCCESS,
      actions.FETCH_STUDENTS_COUNT_FAILURE,
      'students',
    ),
  );
};

export const fetchGroupsCount = () => (dispatch) => {
  dispatch(
    fetchCount(
      actions.FETCH_GROUPS_COUNT,
      actions.FETCH_GROUPS_COUNT_SUCCESS,
      actions.FETCH_GROUPS_COUNT_FAILURE,
      'groups',
    ),
  );
};

export const fetchSubjectsCount = () => (dispatch) => {
  dispatch(
    fetchCount(
      actions.FETCH_SUBJECTS_COUNT,
      actions.FETCH_SUBJECTS_COUNT_SUCCESS,
      actions.FETCH_SUBJECTS_COUNT_FAILURE,
      'subjects',
    ),
  );
};
