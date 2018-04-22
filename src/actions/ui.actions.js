import { SET_TITLE, SET_DARK_MODE } from '../constants/ui.types';
import { RESET_MESSAGE } from '../constants/network.types';

export const setTitle = title => ({ type: SET_TITLE, title });

export const resetMessage = () => ({ type: RESET_MESSAGE });

export const toggleDarkness = () => (dispatch) => {
  const value = localStorage.getItem('dark');
  if (value !== 'true') {
    localStorage.setItem('dark', true);
    dispatch({ type: SET_DARK_MODE, dark: true });
  } else {
    localStorage.setItem('dark', false);
    dispatch({ type: SET_DARK_MODE, dark: false });
  }
};

export const getDarkness = () => (dispatch) => {
  const value = localStorage.getItem('dark');
  if (value === 'true') {
    dispatch({ type: SET_DARK_MODE, dark: true });
  } else {
    dispatch({ type: SET_DARK_MODE, dark: false });
  }
};
