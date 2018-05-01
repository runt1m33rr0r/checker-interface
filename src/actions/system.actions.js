import { makeRequest } from '../api';
import * as types from '../constants/system.types';
import ENDPOINT from '../constants/api.constants';

export const checkSetup = () => async (dispatch) => {
  const res = await makeRequest({
    url: `${ENDPOINT}/api/settings/setup`,
    method: 'get',
    dispatch,
  });

  if (res.success === true) {
    dispatch({ type: types.CHECK_SETUP_SUCCESS, setupFinished: res.setupFinished });
  }
};

export const resetSetup = () => async (dispatch) => {
  const res = await makeRequest({
    url: `${ENDPOINT}/api/settings/setup`,
    method: 'post',
    data: { setupFinished: false },
    dispatch,
  });

  if (res.success === true) {
    dispatch({ type: types.RESET_SETUP_SUCCESS });
  }
};

export const fetchFreeSubjects = () => async (dispatch) => {
  const res = await makeRequest({
    url: `${ENDPOINT}/api/subjects?free=true`,
    method: 'get',
    dispatch,
  });

  if (res.success === true) {
    dispatch({ type: types.FETCH_FREE_SUBJECTS_SUCCESS, freeSubjects: res.subjectCodes });
  }
};

const fetchCount = (successAction, collectionName) => async (dispatch) => {
  const res = await makeRequest({
    url: `${ENDPOINT}/api/${collectionName}?count=true`,
    method: 'get',
    dispatch,
  });

  if (res.success === true) {
    dispatch({ type: successAction, count: res.count });
  }
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
