import {
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
  LOGOUT_SUCCESS,
  REGISTER_REQUEST,
  REGISTER_FAILURE,
  REGISTER_SUCCESS,
} from '../constants/action-types';

// The auth reducer. The starting state sets authentication
// based on a token being in local storage. In a real app,
// we would also want a util to check if the token is expired.
const auth = (
  state = {
    isFetching: false,
    isAuthenticated: !!localStorage.getItem('token'),
    isRegistered: !!localStorage.getItem('registered'),
    username: localStorage.getItem('username') ? localStorage.getItem('username') : '',
    roles: localStorage.getItem('roles') ? localStorage.getItem('roles') : '',
  },
  action,
) => {
  switch (action.type) {
    case LOGIN_REQUEST:
      return Object.assign({}, state, {
        isFetching: action.isFetching,
        isAuthenticated: action.isAuthenticated,
      });
    case LOGIN_SUCCESS:
      return Object.assign({}, state, {
        isFetching: action.isFetching,
        isAuthenticated: action.isAuthenticated,
        username: action.username,
        roles: action.roles,
        errorMessage: '',
      });
    case LOGIN_FAILURE:
      return Object.assign({}, state, {
        isFetching: action.isFetching,
        isAuthenticated: action.isAuthenticated,
        errorMessage: action.message,
      });
    case LOGOUT_SUCCESS:
      return Object.assign({}, state, {
        isFetching: action.isFetching,
        isAuthenticated: action.isAuthenticated,
        username: action.username,
        roles: action.roles,
        errorMessage: '',
      });
    case REGISTER_REQUEST:
      return Object.assign({}, state, {
        isFetching: action.isFetching,
        isRegistered: action.isRegistered,
      });
    case REGISTER_SUCCESS:
      return Object.assign({}, state, {
        isFetching: action.isFetching,
        isRegistered: action.isRegistered,
        errorMessage: '',
      });
    case REGISTER_FAILURE:
      return Object.assign({}, state, {
        isFetching: action.isFetching,
        isRegistered: action.isRegistered,
        errorMessage: '',
      });
    default:
      return state;
  }
};

export default auth;
