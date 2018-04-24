import axios from 'axios';

import { NETWORK_START, NETWORK_SUCCESS, NETWORK_FAILURE } from '../constants/network.types';

/* eslint import/prefer-default-export: 0 */
export const makeRequest = async ({
  url, method, dispatch, token, data,
}) => {
  const headers = { Authorization: `Bearer ${token}` };
  dispatch({ type: NETWORK_START });

  let res = {};
  try {
    res = await axios({
      method,
      url,
      data,
      headers,
    });
  } catch (error) {
    dispatch({ type: NETWORK_FAILURE, message: error.message });
    // there is no useful data from the response, so we return empty data
    return {};
  }

  if (res.data.success === true) {
    dispatch({ type: NETWORK_SUCCESS });
    return res.data;
  } else {
    dispatch({ type: NETWORK_FAILURE, message: res.data.message });
    return res.data;
  }
};
