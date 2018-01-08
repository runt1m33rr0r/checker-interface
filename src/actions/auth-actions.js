import axios from 'axios';
import * as types from '../constants/action-types';
import ENDPOINT from '../constants/api-endpoint';

const requestLogin = () => ({
  type: types.LOGIN_REQUEST,
  isFetching: true,
  isAuthenticated: false,
});

const receiveLogin = user => ({
  type: types.LOGIN_SUCCESS,
  isFetching: false,
  isAuthenticated: true,
  token: user.token,
  username: user.username,
  roles: user.roles,
});

const loginError = message => ({
  type: types.LOGIN_FAILURE,
  isFetching: false,
  isAuthenticated: false,
  message,
});

export const loginUser = creds => (dispatch) => {
  dispatch(requestLogin());
  return axios
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
        dispatch(loginError(response.data.message));
      }
    })
    .catch(err => console.log('Error: ', err));
};

const requestRegister = () => ({
  type: types.REGISTER_REQUEST,
  isFetching: true,
  isRegistered: false,
});

const receiveRegister = () => ({
  type: types.REGISTER_SUCCESS,
  isFetching: false,
  isRegistered: true,
});

const registerError = () => ({
  type: types.REGISTER_FAILURE,
  isFetching: false,
  isRegistered: false,
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
    .catch(err => console.log('Error: ', err));
};

const logout = () => ({
  type: types.LOGOUT_SUCCESS,
  isFetching: false,
  isAuthenticated: false,
  username: '',
  roles: [],
});

export const logoutUser = () => (dispatch) => {
  localStorage.removeItem('token');
  localStorage.removeItem('username');
  localStorage.removeItem('roles');
  dispatch(logout());
};
