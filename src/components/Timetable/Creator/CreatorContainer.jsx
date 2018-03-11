import { connect } from 'react-redux';
import React, { Component } from 'react';
import PropTypes from 'prop-types';

import {
  fetchSubjects,
  fetchGroups,
  fetchTimeslots,
  fetchTeachers,
  createLesson,
  deleteLesson,
} from '../../../actions/timetable-actions';
import Creator from './Creator';
import titled from '../../common/TitledComponent';

class CreatorContainer extends Component {
  componentDidMount = () => {
    this.props.fetchGroups();
    this.props.fetchSubjects();
    this.props.fetchTimeslots();
    this.props.fetchTeachers();
  };

  render = () => <Creator {...this.props} />;
}

CreatorContainer.propTypes = {
  fetchGroups: PropTypes.func.isRequired,
  fetchSubjects: PropTypes.func.isRequired,
  fetchTimeslots: PropTypes.func.isRequired,
  fetchTeachers: PropTypes.func.isRequired,
};

const mapStateToProps = ({ timetable }) => ({
  subjectCodes: timetable.subjectCodes,
  groupNames: timetable.groupNames,
  timeslots: timetable.timeslots,
  teachers: timetable.teachers,
});

const mapDispatchToProps = dispatch => ({
  fetchSubjects: () => dispatch(fetchSubjects()),
  fetchGroups: () => dispatch(fetchGroups()),
  fetchTimeslots: () => dispatch(fetchTimeslots()),
  fetchTeachers: () => dispatch(fetchTeachers()),
  createLesson: (groupName, subjectCode, teacherUsername, timeslotID) =>
    dispatch(createLesson(groupName, subjectCode, teacherUsername, timeslotID)),
  deleteLesson: lesson => dispatch(deleteLesson(lesson)),
});

export default connect(mapStateToProps, mapDispatchToProps)(titled(CreatorContainer, 'Създаване на програма'));
