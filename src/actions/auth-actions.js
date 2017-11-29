import axios from 'axios';
import * as types from '../constants/action-types';

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
});

const loginError = message => ({
  type: types.LOGIN_FAILURE,
  isFetching: false,
  isAuthenticated: false,
  message,
});

export function loginUser(creds) {
  return (dispatch) => {
    dispatch(requestLogin());
    return axios
      .post('http://localhost:8080/users/login', {
        username: creds.username,
        password: creds.password,
      })
      .then((response) => {
        if (response.data.success) {
          localStorage.setItem('token', response.data.token);
          dispatch(receiveLogin(response.data));
        } else {
          dispatch(loginError(response.message));
        }

        console.log(response.data);
      })
      .catch(err => console.log('Error: ', err));
  };
}

function logout() {
  return {
    type: types.LOGOUT_SUCCESS,
    isFetching: false,
    isAuthenticated: false,
  };
}

export function logoutUser() {
  return (dispatch) => {
    localStorage.removeItem('token');
    dispatch(logout());
  };
}
