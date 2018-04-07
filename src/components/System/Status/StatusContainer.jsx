import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import Status from './Status';
import * as actions from '../../../actions/system.actions';
import titled from '../../common/TitledComponent';

class StatusContainer extends Component {
  componentDidMount() {
    this.props.checkSetup();
    this.props.fetchFreeSubjects();
    this.props.fetchTeachersCount();
    this.props.fetchStudentsCount();
    this.props.fetchGroupsCount();
    this.props.fetchSubjectsCount();
  }

  render() {
    return <Status {...this.props} />;
  }
}

StatusContainer.propTypes = {
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

const mapDispatchToProps = dispatch => bindActionCreators(actions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(titled(StatusContainer, 'Състояние на системата'));
