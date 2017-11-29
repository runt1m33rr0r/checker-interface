import { combineReducers } from 'redux';
import userInterface from './interface-reducer';
import auth from './auth-reducer';

const rootReducer = combineReducers({
  userInterface,
  auth,
});

export default rootReducer;
