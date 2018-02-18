import { SEND_IMAGE, SEND_IMAGE_SUCCESS, SEND_IMAGE_FAILURE } from '../constants/action-types';
import ENDPOINT from '../constants/api-constants';
import { makeRequest } from '../api';

/* eslint import/prefer-default-export: 0 */
export const sendImage = image => (dispatch) => {
  dispatch({ type: SEND_IMAGE });
  const token = localStorage.getItem('token');
  makeRequest({
    url: `${ENDPOINT}/students/check`,
    method: 'post',
    token,
    data: { image },
    dispatch,
  })
    .then(() => dispatch({ type: SEND_IMAGE_SUCCESS }))
    .catch(err => dispatch({ type: SEND_IMAGE_FAILURE, message: err.message }));
};
