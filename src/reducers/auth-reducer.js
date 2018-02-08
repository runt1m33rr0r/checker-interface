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
    isAuthenticated: !!localStorage.getItem('token'),
    isRegistered: !!localStorage.getItem('registered'),
    username: localStorage.getItem('username') ? localStorage.getItem('username') : '',
    roles: localStorage.getItem('roles') ? localStorage.getItem('roles') : '',
  },
  action,
) => {
  switch (action.type) {
    case LOGIN_REQUEST:
      return { ...state, isAuthenticated: false };
    case LOGIN_SUCCESS:
      return {
        ...state,
        isAuthenticated: true,
        username: action.username,
        roles: action.roles,
      };
    case LOGIN_FAILURE:
      return { ...state, isAuthenticated: false };
    case LOGOUT_SUCCESS:
      return {
        ...state,
        isAuthenticated: false,
        username: action.username,
        roles: action.roles,
      };
    case REGISTER_REQUEST:
      return { ...state, isRegistered: false };
    case REGISTER_SUCCESS:
      return { ...state, isRegistered: true };
    case REGISTER_FAILURE:
      return { ...state, isRegistered: false };
    default:
      return state;
  }
};

export default auth;
