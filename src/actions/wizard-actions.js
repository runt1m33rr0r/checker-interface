import { SET_SCHOOL_TYPE } from '../constants/action-types';

export const setSchoolType = type => ({
  type: SET_SCHOOL_TYPE,
  schoolType: type,
});
