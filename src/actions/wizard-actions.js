import { SET_SCHOOL_TYPE, ADD_SUBJECT, REMOVE_SUBJECT } from '../constants/action-types';

export const setSchoolType = type => ({
  type: SET_SCHOOL_TYPE,
  schoolType: type,
});

export const addSubject = subjectName => ({
  type: ADD_SUBJECT,
  subjectName,
});

export const removeSubject = subjectName => ({
  type: REMOVE_SUBJECT,
  subjectName,
});
