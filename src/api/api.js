import axios from 'axios';

import { NETWORK_START, NETWORK_SUCCESS, NETWORK_FAILURE } from '../constants/network.types';

/* eslint import/prefer-default-export: 0 */
export const makeRequest = ({
  url, method, dispatch, token, data,
}) => {
  const headers = { Authorization: `Bearer ${token}` };
  dispatch({ type: NETWORK_START });
  return axios({
    method,
    url,
    data,
    headers,
  })
    .catch((err) => {
      dispatch({ type: NETWORK_FAILURE, message: err.message });
    })
    .then((response) => {
      if (response.data.success === true) {
        dispatch({ type: NETWORK_SUCCESS });
        return Promise.resolve(response.data);
      } else {
        dispatch({ type: NETWORK_FAILURE, message: response.data.message });
        return Promise.reject(response.data);
      }
    });
};
