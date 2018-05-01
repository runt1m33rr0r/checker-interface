import { makeRequest } from '../api';
import ENDPOINT from '../constants/api.constants';
import { GET_ABSENCES_SUCCESS } from '../constants/user.types';

const fetchAbsences = userType => async (dispatch) => {
  const res = await makeRequest({
    url: `${ENDPOINT}/absences/${userType}`,
    method: 'get',
    dispatch,
  });

  if (res.success === true) {
    if (Array.isArray(res.absences)) {
      dispatch({ type: GET_ABSENCES_SUCCESS, absences: res.absences });
    }
  }
};

export const fetchStudentAbsences = () => async dispatch => dispatch(fetchAbsences('student'));

export const fetchTeacherAbsences = () => async dispatch => dispatch(fetchAbsences('teacher'));
