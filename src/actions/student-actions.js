import { SEND_IMAGE_SUCCESS } from '../constants/action-types';
import ENDPOINT from '../constants/api-constants';
import { makeRequest } from '../api';

/* eslint import/prefer-default-export: 0 */
export const sendImage = image => (dispatch) => {
  const token = localStorage.getItem('token');
  makeRequest({
    url: `${ENDPOINT}/students/check`,
    method: 'post',
    token,
    data: { image },
    dispatch,
  }).then(() => dispatch({ type: SEND_IMAGE_SUCCESS }));
};
