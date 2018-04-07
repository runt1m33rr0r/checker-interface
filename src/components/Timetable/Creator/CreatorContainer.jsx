import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import * as actions from '../../../actions/timetable.actions';
import Creator from './Creator';
import titled from '../../common/TitledComponent';

class CreatorContainer extends Component {
  componentDidMount() {
    this.props.fetchGroups();
    this.props.fetchSubjects();
    this.props.fetchTimeslots();
    this.props.fetchTeachers();
  }

  render() {
    return <Creator {...this.props} />;
  }
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
  ...bindActionCreators(actions, dispatch),
  deleteLesson: lesson => () => dispatch(actions.deleteLesson(lesson)),
  createLesson: (...args) => () => dispatch(actions.createLesson(...args)),
});

export default connect(mapStateToProps, mapDispatchToProps)(titled(CreatorContainer, 'Създаване на програма'));
