import { combineReducers } from 'redux';
import auth from './auth-reducer';
import wizard from './wizard-reducer';
import ui from './ui-reducer';
import network from './network-reducer';
import timetable from './timetable-reducer';
import system from './system-reducer';

const rootReducer = combineReducers({
  auth,
  wizard,
  ui,
  network,
  timetable,
  system,
});

export default rootReducer;
