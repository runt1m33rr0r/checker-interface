import { combineReducers } from 'redux';
import auth from './auth-reducer';
import wizard from './wizard-reducer';
import ui from './ui-reducer';
import network from './network-reducer';

const rootReducer = combineReducers({
  auth,
  wizard,
  ui,
  network,
});

export default rootReducer;
