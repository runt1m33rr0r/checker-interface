import axios from 'axios';

import { NETWORK_START, NETWORK_SUCCESS, NETWORK_FAILURE } from '../constants/network.types';
import { getItem } from '../utils/storage.utils';

/* eslint import/prefer-default-export: 0 */
export const makeRequest = async ({
  url, method, dispatch, data,
}) => {
  const headers = { Authorization: `Bearer ${getItem('token')}` };
  let res = { data: {} };

  dispatch({ type: NETWORK_START });
  try {
    res = await axios({
      method,
      url,
      data,
      headers,
    });
  } catch (error) {
    dispatch({ type: NETWORK_FAILURE, message: error.message });
    return res.data;
  }

  if (res.data && typeof res.data.success === 'boolean' && typeof res.data.message === 'string') {
    if (res.data.success === true) {
      dispatch({ type: NETWORK_SUCCESS });
    } else {
      dispatch({ type: NETWORK_FAILURE, message: res.data.message });
    }
  } else {
    dispatch({ type: NETWORK_FAILURE, message: 'Вътрешна грешка!' });
  }

  return res.data;
};
