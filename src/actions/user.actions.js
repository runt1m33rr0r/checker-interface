import { makeRequest } from '../api';
import ENDPOINT from '../constants/api.constants';
import { GET_ABSENCES_SUCCESS } from '../constants/user.types';

const fetchAbsences = userType => async (dispatch) => {
  const token = localStorage.getItem('token');
  const data = await makeRequest({
    url: `${ENDPOINT}/absences/${userType}`,
    method: 'get',
    token,
    dispatch,
  });

  if (Array.isArray(data.absences)) {
    dispatch({ type: GET_ABSENCES_SUCCESS, absences: data.absences });
  }
};

export const fetchStudentAbsences = () => async dispatch => dispatch(fetchAbsences('student'));

export const fetchTeacherAbsences = () => async dispatch => dispatch(fetchAbsences('teacher'));
