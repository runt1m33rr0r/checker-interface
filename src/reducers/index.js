import { combineReducers } from 'redux';
import auth from './auth.reducer';
import wizard from './wizard.reducer';
import ui from './ui.reducer';
import network from './network.reducer';
import timetable from './timetable.reducer';
import system from './system.reducer';
import user from './user.reducer';

const rootReducer = combineReducers({
  auth,
  wizard,
  ui,
  network,
  timetable,
  system,
  user,
});

export default rootReducer;
