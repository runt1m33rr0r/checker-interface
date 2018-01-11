import { combineReducers } from 'redux';
import auth from './auth-reducer';
import wizard from './wizard-reducer';

const rootReducer = combineReducers({
  auth,
  wizard,
});

export default rootReducer;
