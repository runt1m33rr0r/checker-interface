import * as types from '../constants/ActionTypes';

export const setPageTitle = payload => ({ type: types.SET_PAGE_TITLE, payload });

export const requestLogin = creds => ({
  type: types.LOGIN_REQUEST,
  isFetching: true,
  isAuthenticated: false,
  creds,
});

export const receiveLogin = user => ({
  type: types.LOGIN_SUCCESS,
  isFetching: false,
  isAuthenticated: true,
  id_token: user.id_token,
});

export const loginError = message => ({
  type: types.LOGIN_FAILURE,
  isFetching: false,
  isAuthenticated: false,
  message,
});

export function loginUser(creds) {
  const config = {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: {
      username: creds.username,
      password: creds.password,
    },
  };

  return (dispatch) => {
    // We dispatch requestLogin to kickoff the call to the API
    dispatch(requestLogin(creds));

    return fetch('http://localhost:8080/users/login', config)
      .then(response => response.json().then(user => ({ user, response })))
      .then(({ user, response }) => {
        if (!response.ok) {
          // If there was a problem, we want to
          // dispatch the error condition
          dispatch(loginError(user.message));
          return Promise.reject(user);
        }
        // If login was successful, set the token in local storage
        localStorage.setItem('id_token', user.id_token);
        localStorage.setItem('id_token', user.access_token);
        // Dispatch the success action
        dispatch(receiveLogin(user));
      })
      .catch(err => console.log('Error: ', err));
  };
}

export function logoutUser() {
  return () => {
    localStorage.removeItem('id_token');
    localStorage.removeItem('access_token');
  };
}
