import axios from 'axios';
import jwtDecode from 'jwt-decode';
import {
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
  REGISTER_REQUEST,
  REGISTER_SUCCESS,
  REGISTER_FAILURE,
  LOGOUT_SUCCESS,
} from '../constants/action-types';
import ENDPOINT from '../constants/api-constants';

const receiveLogin = user => ({
  type: LOGIN_SUCCESS,
  token: user.token,
  username: user.username,
  roles: user.roles,
});

export const loginUser = creds => (dispatch) => {
  dispatch({ type: LOGIN_REQUEST });

  axios
    .post(`${ENDPOINT}/users/login`, {
      username: creds.username,
      password: creds.password,
    })
    .then((response) => {
      if (response.data.success) {
        localStorage.setItem('token', response.data.token);
        localStorage.setItem('username', response.data.username);
        localStorage.setItem('roles', JSON.stringify(response.data.roles));
        dispatch(receiveLogin(response.data));
      } else {
        dispatch({ type: LOGIN_FAILURE, message: response.data.message });
      }
    })
    .catch((err) => {
      dispatch({ type: LOGIN_FAILURE, message: err.message });
    });
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

  return axios
    .post(`${ENDPOINT}/users/register`, sendData)
    .then((response) => {
      if (response.data.success) {
        localStorage.setItem('registered', true);
        dispatch({ type: REGISTER_SUCCESS });
      } else {
        dispatch({ type: REGISTER_FAILURE, message: response.data.message });
      }
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
