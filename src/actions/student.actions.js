import { SEND_IMAGE_SUCCESS } from '../constants/student.types';
import ENDPOINT from '../constants/api.constants';
import { makeRequest } from '../api';

/* eslint import/prefer-default-export: 0 */
export const sendImage = image => async (dispatch) => {
  const token = localStorage.getItem('token');
  await makeRequest({
    url: `${ENDPOINT}/students/check`,
    method: 'post',
    token,
    data: { image },
    dispatch,
  });
  dispatch({ type: SEND_IMAGE_SUCCESS });
};
