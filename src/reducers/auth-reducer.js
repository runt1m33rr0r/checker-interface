import {
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
  LOGOUT_SUCCESS,
  REGISTER_REQUEST,
  REGISTER_FAILURE,
  REGISTER_SUCCESS,
} from '../constants/action-types';

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
        isFetching: true,
        isAuthenticated: false,
      });
    case LOGIN_SUCCESS:
      return Object.assign({}, state, {
        isFetching: false,
        isAuthenticated: true,
        username: action.username,
        roles: action.roles,
      });
    case LOGIN_FAILURE:
      return Object.assign({}, state, {
        isFetching: false,
        isAuthenticated: false,
      });
    case LOGOUT_SUCCESS:
      return Object.assign({}, state, {
        isFetching: false,
        isAuthenticated: false,
        username: action.username,
        roles: action.roles,
      });
    case REGISTER_REQUEST:
      return Object.assign({}, state, {
        isFetching: true,
        isRegistered: false,
      });
    case REGISTER_SUCCESS:
      return Object.assign({}, state, {
        isFetching: false,
        isRegistered: true,
      });
    case REGISTER_FAILURE:
      return Object.assign({}, state, {
        isFetching: false,
        isRegistered: false,
      });
    default:
      return state;
  }
};

export default auth;
