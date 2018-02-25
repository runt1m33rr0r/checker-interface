import jwtDecode from 'jwt-decode';
import {
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
  REGISTER_REQUEST,
  REGISTER_SUCCESS,
  REGISTER_FAILURE,
  LOGOUT_SUCCESS,
  FETCH_PROFILE_SUCCESS,
} from '../constants/action-types';
import { makeRequest } from '../api';
import ENDPOINT from '../constants/api-constants';

const receiveLogin = user => ({
  type: LOGIN_SUCCESS,
  token: user.token,
  username: user.username,
  roles: user.roles,
});

export const loginUser = creds => (dispatch) => {
  dispatch({ type: LOGIN_REQUEST });
  makeRequest({
    url: `${ENDPOINT}/users/login`,
    method: 'post',
    data: {
      username: creds.username,
      password: creds.password,
    },
    dispatch,
  })
    .then((data) => {
      localStorage.setItem('token', data.token);
      localStorage.setItem('username', data.username);
      localStorage.setItem('roles', JSON.stringify(data.roles));
      dispatch(receiveLogin(data));
    })
    .catch(err => dispatch({ type: LOGIN_FAILURE, message: err.message }));
};

export const registerUser = data => (dispatch) => {
  dispatch({ type: REGISTER_REQUEST });
  const {
    userType, username, password, firstName, lastName, group, subjects,
  } = data;

  const sendData = {
    userType,
    username,
    password,
    firstName,
    lastName,
    leadTeacher: false,
  };
  if (userType === 'Student') {
    sendData.group = group;
  } else {
    sendData.subjects = subjects;
  }

  makeRequest({
    url: `${ENDPOINT}/users/register`,
    method: 'post',
    data: sendData,
    dispatch,
  })
    .then(() => {
      localStorage.setItem('registered', true);
      dispatch({ type: REGISTER_SUCCESS });
    })
    .catch(err => dispatch({ type: REGISTER_FAILURE, message: err.message }));
};

export const logoutUser = () => (dispatch) => {
  localStorage.removeItem('token');
  localStorage.removeItem('username');
  localStorage.removeItem('roles');
  dispatch({
    type: LOGOUT_SUCCESS,
    username: '',
    roles: [],
  });
};

export const checkAuth = () => (dispatch) => {
  const token = localStorage.getItem('token');
  if (!token || jwtDecode(token).exp < Date.now() / 1000) {
    localStorage.clear();
    dispatch({ type: LOGIN_FAILURE, message: 'Нямате право за тази страница!' });
  }
};

export const fetchProfile = () => (dispatch) => {
  const token = localStorage.getItem('token');
  makeRequest({
    url: `${ENDPOINT}/api/profile`,
    method: 'get',
    dispatch,
    token,
  }).then(data => dispatch({ type: FETCH_PROFILE_SUCCESS, profile: data.profile }));
};
