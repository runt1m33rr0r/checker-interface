import { combineReducers } from 'redux';
import userInterface from './interface';
import auth from './auth';

const rootReducer = combineReducers({
  userInterface,
  auth,
});

export default rootReducer;
