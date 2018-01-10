import { Map, Set, fromJS } from 'immutable';

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
  state = Map({
    isFetching: false,
    isAuthenticated: !!localStorage.getItem('token'),
    isRegistered: !!localStorage.getItem('registered'),
    username: localStorage.getItem('username') ? localStorage.getItem('username') : '',
    roles: localStorage.getItem('roles') ? Set(localStorage.getItem('roles')) : Set(),
  }),
  action,
) => {
  switch (action.type) {
    case LOGIN_REQUEST:
      return state.mergeDeep({
        isFetching: action.isFetching,
        isAuthenticated: action.isAuthenticated,
      });
    case LOGIN_SUCCESS:
      return state.mergeDeep({
        isFetching: action.isFetching,
        isAuthenticated: action.isAuthenticated,
        username: action.username,
        roles: fromJS(action.roles),
        errorMessage: '',
      });
    case LOGIN_FAILURE:
      return state.mergeDeep({
        isFetching: action.isFetching,
        isAuthenticated: action.isAuthenticated,
        errorMessage: action.message,
      });
    case LOGOUT_SUCCESS:
      return state.mergeDeep({
        isFetching: action.isFetching,
        isAuthenticated: action.isAuthenticated,
        username: action.username,
        roles: fromJS(action.roles),
        errorMessage: '',
      });
    case REGISTER_REQUEST:
      return state.mergeDeep({
        isFetching: action.isFetching,
        isRegistered: action.isRegistered,
      });
    case REGISTER_SUCCESS:
      return state.mergeDeep({
        isFetching: action.isFetching,
        isRegistered: action.isRegistered,
        errorMessage: '',
      });
    case REGISTER_FAILURE:
      return state.mergeDeep({
        isFetching: action.isFetching,
        isRegistered: action.isRegistered,
        errorMessage: '',
      });
    default:
      return state;
  }
};

export default auth;
