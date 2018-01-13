import { combineReducers } from 'redux';
import auth from './auth-reducer';
import wizard from './wizard-reducer';
import ui from './ui-reducer';

const rootReducer = combineReducers({
  auth,
  wizard,
  ui,
});

export default rootReducer;
