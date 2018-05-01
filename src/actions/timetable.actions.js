import { makeRequest } from '../api';
import * as types from '../constants/timetable.types';
import ENDPOINT from '../constants/api.constants';

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

export const fetchSubjects = () => async (dispatch) => {
  const res = await makeRequest({
    url: `${ENDPOINT}/api/subjects`,
    method: 'get',
    dispatch,
  });

  if (res.success === true) {
    dispatch({ type: types.FETCH_SUBJECTS_SUCCESS, subjectCodes: res.subjectCodes });
  }
};

export const fetchGroups = () => async (dispatch) => {
  const res = await makeRequest({
    url: `${ENDPOINT}/api/groups`,
    method: 'get',
    dispatch,
  });

  if (res.success === true) {
    dispatch({ type: types.FETCH_GROUPS_SUCCESS, groupNames: res.groupNames });
  }
};

const fetchLessons = (groupName = null) => async (dispatch) => {
  const res = await makeRequest({
    url: groupName
      ? `${ENDPOINT}/api/lessons?group=${groupName}`
      : `${ENDPOINT}/api/lessons?mine=true`,
    method: 'get',
    dispatch,
  });

  if (res.success === true) {
    dispatch({ type: types.FETCH_LESSONS_SUCCESS, lessons: sortLessons(res.lessons) });
  }
};

export const fetchGroupLessons = groupName => dispatch => dispatch(fetchLessons(groupName));

export const fetchUserLessons = () => dispatch => dispatch(fetchLessons());

export const fetchTimeslots = () => async (dispatch) => {
  const res = await makeRequest({
    url: `${ENDPOINT}/api/timeslots`,
    method: 'get',
    dispatch,
  });

  if (res.success === true) {
    dispatch({ type: types.FETCH_TIMESLOTS_SUCCESS, timeslots: res.timeslots });
  }
};

export const fetchTeachers = () => async (dispatch) => {
  const res = await makeRequest({
    url: `${ENDPOINT}/api/teachers`,
    method: 'get',
    dispatch,
  });

  if (res.success === true) {
    dispatch({ type: types.FETCH_TEACHERS_SUCCESS, teachers: res.usernames });
  }
};

export const generateTimetable = groupLessonsToRefresh => async (dispatch) => {
  const res = await makeRequest({
    url: `${ENDPOINT}/api/school/settings/timetable/generate`,
    method: 'post',
    data: {},
    dispatch,
  });

  if (res.success === true) {
    dispatch({ type: types.GENERATE_TIMETABLE_SUCCESS });
    dispatch(fetchLessons(groupLessonsToRefresh));
  }
};

export const createLesson = (
  groupName,
  subjectCode,
  teacherUsername,
  timeslotID,
) => async (dispatch) => {
  const res = await makeRequest({
    url: `${ENDPOINT}/api/lessons`,
    method: 'post',
    dispatch,
    data: {
      groupName,
      subjectCode,
      teacherUsername,
      timeslotID,
    },
  });

  if (res.success === true) {
    dispatch({ type: types.CREATE_LESSON_SUCCESS });
    dispatch(fetchLessons(groupName));
  }
};

export const deleteLesson = lesson => async (dispatch) => {
  const res = await makeRequest({
    url: `${ENDPOINT}/api/lessons`,
    method: 'delete',
    dispatch,
    data: { lesson },
  });

  if (res.success === true) {
    dispatch({ type: types.DELETE_LESSON_SUCCESS });
    dispatch(fetchLessons(lesson.groupName));
  }
};
