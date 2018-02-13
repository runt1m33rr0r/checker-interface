import axios from 'axios';
import { SEND_IMAGE, SEND_IMAGE_SUCCESS, SEND_IMAGE_FAILURE } from '../constants/action-types';
import ENDPOINT from '../constants/api-constants';

/* eslint import/prefer-default-export: 0 */
export const sendImage = image => (dispatch) => {
  dispatch({ type: SEND_IMAGE });

  const token = localStorage.getItem('token');
  axios
    .post(
      `${ENDPOINT}/students/check`,
      { image },
      { headers: { Authorization: `Bearer ${token}` } },
    )
    .then((response) => {
      if (response.data.success) {
        dispatch({ type: SEND_IMAGE_SUCCESS });
      } else {
        dispatch({ type: SEND_IMAGE_FAILURE, message: response.data.message });
      }
    })
    .catch((err) => {
      dispatch({ type: SEND_IMAGE_FAILURE, message: err.message });
    });
};
