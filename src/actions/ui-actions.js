import { SET_TITLE, RESET_MESSAGE } from '../constants/action-types';

export const setTitle = title => ({ type: SET_TITLE, title });

export const resetMessage = () => ({ type: RESET_MESSAGE });
