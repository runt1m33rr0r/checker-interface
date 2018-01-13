import {
  SET_SCHOOL_TYPE,
  ADD_SUBJECT,
  REMOVE_SUBJECT,
  ADD_TIMESLOT,
  REMOVE_TIMESLOT,
  SET_GROUPS_COUNT,
  GENERATE_GROUPS_STARTED,
  GENERATE_GROUPS_FINISHED,
  ADD_SUBJECT_TO_GROUP,
  REMOVE_SUBJECT_FROM_GROUP,
  FINISH_WIZARD,
} from '../constants/action-types';

export const setSchoolType = type => ({
  type: SET_SCHOOL_TYPE,
  schoolType: type,
});

export const setGroupsCount = count => ({
  type: SET_GROUPS_COUNT,
  count,
});

export const addSubject = subjectName => ({
  type: ADD_SUBJECT,
  subjectName,
});

export const removeSubject = subjectName => ({
  type: REMOVE_SUBJECT,
  subjectName,
});

export const addTimeslot = (fromHour, fromMinute, toHour, toMinute, day) => ({
  type: ADD_TIMESLOT,
  fromHour,
  fromMinute,
  toHour,
  toMinute,
  day,
});

export const removeTimeslot = (fromHour, fromMinute, toHour, toMinute, day) => ({
  type: REMOVE_TIMESLOT,
  fromHour,
  fromMinute,
  toHour,
  toMinute,
  day,
});

// export const generateGroups = () => ({ type: GENERATE_GROUPS });
const generateStart = () => ({ type: GENERATE_GROUPS_STARTED });
const generateFinish = (groups, groupNames) => ({
  type: GENERATE_GROUPS_FINISHED,
  groups,
  groupNames,
});

export const generateGroups = (schoolType, groupsCount) => (dispatch) => {
  dispatch(generateStart());

  const groups = {};
  const groupNames = [];
  const letters = ['А', 'Б', 'В', 'Г', 'Д', 'Е', 'Ж', 'З', 'И'];
  const startGrade = schoolType === 'gymnasium' ? 8 : 1;
  const endGrade = schoolType === 'gymnasium' ? 12 : 7;

  for (let grade = startGrade; grade <= endGrade; grade += 1) {
    for (let groupIdx = 1; groupIdx <= groupsCount && groupIdx < letters.length; groupIdx += 1) {
      const name = `${grade}${letters[groupIdx - 1]}`;
      groups[name] = [];
      groupNames.push(name);
    }
  }

  dispatch(generateFinish(groups, groupNames));
};

export const addSubjectToGroup = (groupName, subjectName) => ({
  type: ADD_SUBJECT_TO_GROUP,
  groupName,
  subjectName,
});

export const removeSubjectFromGroup = (groupName, subjectName) => ({
  type: REMOVE_SUBJECT_FROM_GROUP,
  groupName,
  subjectName,
});

export const finishWizard = () => (dispatch) => {
  console.log('finishing');

  dispatch({ type: FINISH_WIZARD });
};
