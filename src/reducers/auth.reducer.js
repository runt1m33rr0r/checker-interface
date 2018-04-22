import * as types from '../constants/auth.types';

const auth = (
  state = {
    isAuthenticated: !!localStorage.getItem('token'),
    isRegistered: !!localStorage.getItem('registered'),
    username: localStorage.getItem('username') ? localStorage.getItem('username') : '',
    roles: localStorage.getItem('roles') ? JSON.parse(localStorage.getItem('roles')) : [],
    profile: {},
  },
  action,
) => {
  switch (action.type) {
    case types.LOGIN_REQUEST:
      return { ...state, isAuthenticated: false };
    case types.LOGIN_SUCCESS:
      return {
        ...state,
        isAuthenticated: true,
        username: action.username,
        roles: action.roles,
      };
    case types.LOGIN_FAILURE:
      return { ...state, isAuthenticated: false };
    case types.LOGOUT_SUCCESS:
      return {
        ...state,
        isAuthenticated: false,
        username: action.username,
        roles: action.roles,
      };
    case types.REGISTER_STUDENT_REQUEST:
      return { ...state, isRegistered: false };
    case types.REGISTER_STUDENT_SUCCESS:
      return { ...state, isRegistered: true };
    case types.REGISTER_STUDENT_FAILURE:
      return { ...state, isRegistered: false };
    case types.FETCH_PROFILE_SUCCESS:
      return { ...state, profile: action.profile };
    default:
      return state;
  }
};

export default auth;
