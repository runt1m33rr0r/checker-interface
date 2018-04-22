import { makeRequest } from '../api';
import * as types from '../constants/system.types';
import ENDPOINT from '../constants/api.constants';

export const checkSetup = () => (dispatch) => {
  const token = localStorage.getItem('token');
  makeRequest({
    url: `${ENDPOINT}/api/settings/setup`,
    method: 'get',
    token,
    dispatch,
  }).then(data => dispatch({ type: types.CHECK_SETUP_SUCCESS, setupFinished: data.setupFinished }));
};

export const resetSetup = () => (dispatch) => {
  const token = localStorage.getItem('token');
  makeRequest({
    url: `${ENDPOINT}/api/settings/setup`,
    method: 'post',
    data: { setupFinished: false },
    token,
    dispatch,
  }).then(() => dispatch({ type: types.RESET_SETUP_SUCCESS }));
};

export const fetchFreeSubjects = () => (dispatch) => {
  const token = localStorage.getItem('token');
  makeRequest({
    url: `${ENDPOINT}/api/subjects?free=true`,
    method: 'get',
    token,
    dispatch,
  }).then(data =>
    dispatch({ type: types.FETCH_FREE_SUBJECTS_SUCCESS, freeSubjects: data.subjectCodes }));
};

const fetchCount = (successAction, collectionName) => (dispatch) => {
  const token = localStorage.getItem('token');
  makeRequest({
    url: `${ENDPOINT}/api/${collectionName}?count=true`,
    method: 'get',
    token,
    dispatch,
  }).then(data => dispatch({ type: successAction, count: data.count }));
};

export const fetchTeachersCount = () => (dispatch) => {
  dispatch(fetchCount(types.FETCH_TEACHERS_COUNT_SUCCESS, 'teachers'));
};

export const fetchStudentsCount = () => (dispatch) => {
  dispatch(fetchCount(types.FETCH_STUDENTS_COUNT_SUCCESS, 'students'));
};

export const fetchGroupsCount = () => (dispatch) => {
  dispatch(fetchCount(types.FETCH_GROUPS_COUNT_SUCCESS, 'groups'));
};

export const fetchSubjectsCount = () => (dispatch) => {
  dispatch(fetchCount(types.FETCH_SUBJECTS_COUNT_SUCCESS, 'subjects'));
};
