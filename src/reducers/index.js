import { combineReducers } from 'redux';
import auth from './auth-reducer';
import wizard from './wizard-reducer';
import ui from './ui-reducer';
import network from './network-reducer';
import timetable from './timetable-reducer';

const rootReducer = combineReducers({
  auth,
  wizard,
  ui,
  network,
  timetable,
});

export default rootReducer;
