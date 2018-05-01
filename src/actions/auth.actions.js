import jwtDecode from 'jwt-decode';

import * as types from '../constants/auth.types';
import { makeRequest } from '../api';
import ENDPOINT from '../constants/api.constants';
import { setItem, getItem, removeItem } from '../utils/storage.utils';

const receiveLogin = user => ({
  type: types.LOGIN_SUCCESS,
  token: user.token,
  username: user.username,
  roles: user.roles,
});

export const loginUser = ({ username, password }) => async (dispatch) => {
  dispatch({ type: types.LOGIN_REQUEST });

  const res = await makeRequest({
    url: `${ENDPOINT}/users/login`,
    method: 'post',
    data: { username, password },
    dispatch,
  });

  if (res.success === true) {
    setItem('token', res.token);
    setItem('username', res.username);
    setItem('roles', res.roles);

    dispatch(receiveLogin(res));
  } else {
    dispatch({ type: types.LOGIN_FAILURE });
  }
};

export const registerStudent = ({
  username,
  password,
  firstName,
  lastName,
  groups,
}) => async (dispatch) => {
  dispatch({ type: types.REGISTER_STUDENT_REQUEST });

  const res = await makeRequest({
    url: `${ENDPOINT}/users/register`,
    method: 'post',
    data: {
      username,
      password,
      firstName,
      lastName,
      groups,
      userType: 'Student',
    },
    dispatch,
  });

  if (res.success === true) {
    setItem('registered', true);
    dispatch({ type: types.REGISTER_STUDENT_SUCCESS });
  } else {
    dispatch({ type: types.REGISTER_STUDENT_FAILURE });
  }
};

export const registerTeacher = ({
  username,
  password,
  firstName,
  lastName,
  group,
  subjects,
  isLeadTeacher,
}) => async (dispatch) => {
  dispatch({ type: types.REGISTER_TEACHER_REQUEST });

  const res = await makeRequest({
    url: `${ENDPOINT}/users/register`,
    method: 'post',
    data: {
      username,
      password,
      firstName,
      lastName,
      group,
      subjects,
      leadTeacher: isLeadTeacher,
      userType: 'Teacher',
    },
    dispatch,
  });

  if (res.success === true) {
    setItem('registered', true);
    dispatch({ type: types.REGISTER_TEACHER_SUCCESS });
  } else {
    dispatch({ type: types.REGISTER_TEACHER_FAILURE });
  }
};

export const logoutUser = () => (dispatch) => {
  removeItem('token');
  removeItem('username');
  removeItem('roles');
  dispatch({
    type: types.LOGOUT_SUCCESS,
    username: '',
    roles: [],
  });
};

export const checkAuth = () => (dispatch) => {
  try {
    const token = getItem('token');
    if (!token || jwtDecode(token).exp < Date.now() / 1000) {
      localStorage.clear();
      throw new Error('Нямате право за тази страница!');
    }
  } catch (error) {
    dispatch({ type: types.LOGIN_FAILURE, message: error.message });
  }
};

export const fetchProfile = () => async (dispatch) => {
  const res = await makeRequest({
    url: `${ENDPOINT}/api/profile`,
    method: 'get',
    dispatch,
  });

  if (res.success === true) {
    dispatch({ type: types.FETCH_PROFILE_SUCCESS, profile: res.profile });
  }
};
