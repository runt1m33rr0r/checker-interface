import ENDPOINT from '../constants/api.constants';
import { SET_MESSAGE } from '../constants/network.types';
import { makeRequest } from '../api';

export const encodeStudent = image => async (dispatch) => {
  const token = localStorage.getItem('token');
  const data = await makeRequest({
    url: `${ENDPOINT}/students/encode`,
    method: 'post',
    token,
    data: { image },
    dispatch,
  });

  if (data.success) {
    dispatch({ type: SET_MESSAGE, message: 'Личност успешно запазена!' });
  }
};

export const checkStudent = image => async (dispatch) => {
  const token = localStorage.getItem('token');
  const data = await makeRequest({
    url: `${ENDPOINT}/students/encode`,
    method: 'post',
    token,
    data: { image },
    dispatch,
  });

  if (data.success) {
    dispatch({ type: SET_MESSAGE, message: 'Успешно отбелязано присъствие!' });
  }
};
