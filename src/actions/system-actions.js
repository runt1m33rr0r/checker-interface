import { makeRequest } from '../api';
import * as actions from '../constants/action-types';
import ENDPOINT from '../constants/api-constants';

export const checkSetup = () => (dispatch) => {
  dispatch({ type: actions.CHECK_SETUP });

  const token = localStorage.getItem('token');
  makeRequest({
    url: `${ENDPOINT}/api/settings/setup`,
    method: 'get',
    token,
    dispatch,
  })
    .then(data =>
      dispatch({ type: actions.CHECK_SETUP_SUCCESS, setupFinished: data.setupFinished }),
    )
    .catch(err => dispatch({ type: actions.CHECK_SETUP_FAILURE, message: err.message }));
};

export const resetSetup = () => (dispatch) => {
  dispatch({ type: actions.RESET_SETUP });

  const token = localStorage.getItem('token');
  makeRequest({
    url: `${ENDPOINT}/api/settings/setup`,
    method: 'post',
    data: { setupFinished: false },
    token,
    dispatch,
  })
    .then(() => dispatch({ type: actions.RESET_SETUP_SUCCESS }))
    .catch(err => dispatch({ type: actions.RESET_SETUP_FAILURE, message: err.message }));
};
