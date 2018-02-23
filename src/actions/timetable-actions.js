import { makeRequest } from '../api';
import * as actions from '../constants/action-types';
import ENDPOINT from '../constants/api-constants';

const sortLessons = (lessons) => {
  lessons.sort((first, second) => {
    const firstTimeslot = new Date(
      1990,
      1,
      first.timeslot.day,
      first.timeslot.fromHour,
      first.timeslot.fromMinute,
    );
    const secondTimeslot = new Date(
      1990,
      1,
      second.timeslot.day,
      second.timeslot.fromHour,
      second.timeslot.fromMinute,
    );
    return firstTimeslot > secondTimeslot;
  });
  return lessons;
};

export const fetchSubjects = () => (dispatch) => {
  dispatch({ type: actions.FETCH_SUBJECTS });
  makeRequest({
    url: `${ENDPOINT}/api/subjects`,
    method: 'get',
    dispatch,
  })
    .then(data =>
      dispatch({ type: actions.FETCH_SUBJECTS_SUCCESS, subjectCodes: data.subjectCodes }),
    )
    .catch(err => dispatch({ type: actions.FETCH_SUBJECTS_FAILURE, message: err.message }));
};

export const fetchGroups = () => (dispatch) => {
  dispatch({ type: actions.FETCH_GROUPS });
  makeRequest({
    url: `${ENDPOINT}/api/groups`,
    method: 'get',
    dispatch,
  })
    .then(data => dispatch({ type: actions.FETCH_GROUPS_SUCCESS, groupNames: data.groupNames }))
    .catch(err => dispatch({ type: actions.FETCH_GROUPS_FAILURE, message: err.message }));
};

const fetchLessons = (groupName = null) => (dispatch) => {
  dispatch({ type: actions.FETCH_LESSONS });
  const token = localStorage.getItem('token');

  makeRequest({
    url: groupName
      ? `${ENDPOINT}/api/lessons?group=${groupName}`
      : `${ENDPOINT}/api/lessons?mine=true`,
    method: 'get',
    token,
    dispatch,
  })
    .then(data =>
      dispatch({ type: actions.FETCH_LESSONS_SUCCESS, lessons: sortLessons(data.lessons) }),
    )
    .catch(err => dispatch({ type: actions.FETCH_LESSONS_FAILURE, message: err.message }));
};

export const fetchGroupLessons = groupName => dispatch => dispatch(fetchLessons(groupName));

export const fetchUserLessons = () => dispatch => dispatch(fetchLessons());

export const fetchTimeslots = () => (dispatch) => {
  dispatch({ type: actions.FETCH_TIMESLOTS });
  const token = localStorage.getItem('token');
  makeRequest({
    url: `${ENDPOINT}/api/timeslots`,
    method: 'get',
    dispatch,
    token,
  })
    .then(data => dispatch({ type: actions.FETCH_TIMESLOTS_SUCCESS, timeslots: data.timeslots }))
    .catch(err => dispatch({ type: actions.FETCH_TIMESLOTS_FAILURE, message: err.message }));
};

export const fetchTeachers = () => (dispatch) => {
  dispatch({ type: actions.FETCH_TEACHERS });
  const token = localStorage.getItem('token');
  makeRequest({
    url: `${ENDPOINT}/api/teachers`,
    method: 'get',
    dispatch,
    token,
  })
    .then(data => dispatch({ type: actions.FETCH_TEACHERS_SUCCESS, teachers: data.usernames }))
    .catch(err => dispatch({ type: actions.FETCH_TEACHERS_FAILURE, message: err.message }));
};

export const generateTimetable = groupLessonsToRefresh => (dispatch) => {
  dispatch({ type: actions.GENERATE_TIMETABLE });
  const token = localStorage.getItem('token');
  makeRequest({
    url: `${ENDPOINT}/api/school/settings/timetable/generate`,
    method: 'post',
    token,
    data: {},
    dispatch,
  })
    .then(() => {
      dispatch({ type: actions.GENERATE_TIMETABLE_SUCCESS });
      dispatch(fetchLessons(groupLessonsToRefresh));
    })
    .catch(err => dispatch({ type: actions.GENERATE_TIMETABLE_FAILURE, message: err.message }));
};

export const createLesson = (groupName, subjectCode, teacherUsername, timeslotID) => (dispatch) => {
  dispatch({ type: actions.CREATE_LESSON });
  const token = localStorage.getItem('token');
  makeRequest({
    url: `${ENDPOINT}/api/lessons`,
    method: 'post',
    dispatch,
    token,
    data: {
      groupName,
      subjectCode,
      teacherUsername,
      timeslotID,
    },
  })
    .then(() => {
      dispatch({ type: actions.CREATE_LESSON_SUCCESS });
      dispatch(fetchLessons(groupName));
    })
    .catch(err => dispatch({ type: actions.CREATE_LESSON_FAILURE, message: err.message }));
};

export const deleteLesson = lesson => (dispatch) => {
  dispatch({ type: actions.DELETE_LESSON });
  const token = localStorage.getItem('token');
  makeRequest({
    url: `${ENDPOINT}/api/lessons`,
    method: 'delete',
    dispatch,
    token,
    data: { lesson },
  })
    .then(() => {
      dispatch({ type: actions.DELETE_LESSON_SUCCESS });
      dispatch(fetchLessons(lesson.groupName));
    })
    .catch(err => dispatch({ type: actions.DELETE_LESSON_FAILURE, message: err.message }));
};
