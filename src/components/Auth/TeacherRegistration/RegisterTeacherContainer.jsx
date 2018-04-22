import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import RegisterForm from './RegisterTeacherForm';
import { registerTeacher } from '../../../actions/auth.actions';
import { fetchSubjects, fetchGroups } from '../../../actions/timetable.actions';
import titled from '../../common/TitledComponent';

class RegisterContainer extends Component {
  componentDidMount() {
    this.props.fetchSubjects();
    this.props.fetchGroups();
  }

  render() {
    return <RegisterForm {...this.props} />;
  }
}

RegisterContainer.propTypes = {
  fetchSubjects: PropTypes.func.isRequired,
  fetchGroups: PropTypes.func.isRequired,
};

const mapDispatchToProps = dispatch =>
  bindActionCreators({ handleSubmit: registerTeacher, fetchSubjects, fetchGroups }, dispatch);

const mapStateToProps = ({ timetable }) => ({
  subjects: timetable.subjectCodes,
  groups: timetable.groupNames,
});

export default connect(mapStateToProps, mapDispatchToProps)(titled(RegisterContainer, 'Регистрация'));
