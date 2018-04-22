import jwtDecode from 'jwt-decode';
import * as types from '../constants/auth.types';
import { makeRequest } from '../api';
import ENDPOINT from '../constants/api.constants';

const receiveLogin = user => ({
  type: types.LOGIN_SUCCESS,
  token: user.token,
  username: user.username,
  roles: user.roles,
});

export const loginUser = ({ username, password }) => async (dispatch) => {
  dispatch({ type: types.LOGIN_REQUEST });

  try {
    const data = await makeRequest({
      url: `${ENDPOINT}/users/login`,
      method: 'post',
      data: { username, password },
      dispatch,
    });

    localStorage.setItem('token', data.token);
    localStorage.setItem('username', data.username);
    localStorage.setItem('roles', JSON.stringify(data.roles));

    dispatch(receiveLogin(data));
  } catch (error) {
    dispatch({ type: types.LOGIN_FAILURE, message: error.message });
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
  try {
    await makeRequest({
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

    localStorage.setItem('registered', true);
    dispatch({ type: types.REGISTER_STUDENT_SUCCESS });
  } catch (error) {
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
  try {
    await makeRequest({
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

    localStorage.setItem('registered', true);
    dispatch({ type: types.REGISTER_TEACHER_SUCCESS });
  } catch (error) {
    dispatch({ type: types.REGISTER_TEACHER_FAILURE });
  }
};

export const logoutUser = () => (dispatch) => {
  localStorage.removeItem('token');
  localStorage.removeItem('username');
  localStorage.removeItem('roles');
  dispatch({
    type: types.LOGOUT_SUCCESS,
    username: '',
    roles: [],
  });
};

export const checkAuth = () => (dispatch) => {
  const token = localStorage.getItem('token');
  if (!token || jwtDecode(token).exp < Date.now() / 1000) {
    localStorage.clear();
    dispatch({ type: types.LOGIN_FAILURE, message: 'Нямате право за тази страница!' });
  }
};

export const fetchProfile = () => async (dispatch) => {
  const token = localStorage.getItem('token');
  const data = await makeRequest({
    url: `${ENDPOINT}/api/profile`,
    method: 'get',
    dispatch,
    token,
  });
  dispatch({ type: types.FETCH_PROFILE_SUCCESS, profile: data.profile });
};
