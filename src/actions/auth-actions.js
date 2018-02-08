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
        localStorage.setItem('roles', response.data.roles);
        dispatch(receiveLogin(response.data));
      } else {
        dispatch({ type: LOGIN_FAILURE });
      }
    })
    .catch((err) => {
      dispatch({ type: LOGIN_FAILURE, message: err.message });
    });
};

const requestRegister = () => ({
  type: REGISTER_REQUEST,
});

const receiveRegister = () => ({
  type: REGISTER_SUCCESS,
});

const registerError = message => ({
  type: REGISTER_FAILURE,
  message,
});

export const registerUser = creds => (dispatch) => {
  dispatch(requestRegister());
  return axios
    .post(`${ENDPOINT}/users/register`, {
      username: creds.username,
      password: creds.password,
      firstName: 'FirstName',
      lastName: 'LastName',
      group: '9G',
      userType: 'Student',
    })
    .then((response) => {
      if (response.data.success) {
        localStorage.setItem('registered', true);
        dispatch(receiveRegister(response.data));
      } else {
        dispatch(registerError(response.message));
      }
    })
    .catch(err => dispatch(registerError(err.message)));
};

const logout = () => ({
  type: LOGOUT_SUCCESS,
  username: '',
  roles: [],
});

export const logoutUser = () => (dispatch) => {
  localStorage.removeItem('token');
  localStorage.removeItem('username');
  localStorage.removeItem('roles');
  dispatch(logout());
};

export const checkAuth = () => (dispatch) => {
  const token = localStorage.getItem('token');
  if (!token || jwtDecode(token).exp < Date.now() / 1000) {
    localStorage.clear();
    dispatch({ type: LOGIN_FAILURE, message: 'Нямате право за тази страница!' });
  }
};
