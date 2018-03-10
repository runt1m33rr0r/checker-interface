import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import Status from './Status';
import {
  checkSetup,
  fetchFreeSubjects,
  fetchTeachersCount,
  fetchStudentsCount,
  fetchGroupsCount,
  fetchSubjectsCount,
} from '../../../actions/system-actions';
import { setTitle } from '../../../actions/ui-actions';

class StatusContainer extends Component {
  componentDidMount = () => {
    this.props.setTitle(this.props.title);
    this.props.checkSetup();
    this.props.fetchFreeSubjects();
    this.props.fetchTeachersCount();
    this.props.fetchStudentsCount();
    this.props.fetchGroupsCount();
    this.props.fetchSubjectsCount();
  };

  render = () => <Status {...this.props} />;
}

StatusContainer.propTypes = {
  title: PropTypes.string.isRequired,
  setTitle: PropTypes.func.isRequired,
  checkSetup: PropTypes.func.isRequired,
  fetchFreeSubjects: PropTypes.func.isRequired,
  fetchTeachersCount: PropTypes.func.isRequired,
  fetchStudentsCount: PropTypes.func.isRequired,
  fetchGroupsCount: PropTypes.func.isRequired,
  fetchSubjectsCount: PropTypes.func.isRequired,
};

const mapStateToProps = ({ system }) => ({
  setupFinished: system.setupFinished,
  freeSubjects: system.freeSubjects,
  teachersCount: system.teachersCount,
  studentsCount: system.studentsCount,
  groupsCount: system.groupsCount,
  subjectsCount: system.subjectsCount,
});

const mapDispatchToProps = dispatch => ({
  setTitle: title => dispatch(setTitle(title)),
  checkSetup: () => dispatch(checkSetup()),
  fetchFreeSubjects: () => dispatch(fetchFreeSubjects()),
  fetchTeachersCount: () => dispatch(fetchTeachersCount()),
  fetchStudentsCount: () => dispatch(fetchStudentsCount()),
  fetchGroupsCount: () => dispatch(fetchGroupsCount()),
  fetchSubjectsCount: () => dispatch(fetchSubjectsCount()),
});

export default connect(mapStateToProps, mapDispatchToProps)(StatusContainer);
