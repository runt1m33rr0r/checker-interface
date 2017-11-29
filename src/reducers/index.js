import { combineReducers } from 'redux';
import userInterface from './interface-reducer';
import auth from './auth-reducer';
import wizard from './wizard-reducer';

const rootReducer = combineReducers({
  userInterface,
  auth,
  wizard,
});

export default rootReducer;
