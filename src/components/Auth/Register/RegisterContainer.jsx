import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import RegisterForm from './RegisterForm';
import { registerUser } from '../../../actions/auth.actions';
import { fetchSubjects, fetchGroups } from '../../../actions/timetable.actions';
import titled from '../../common/TitledComponent';

class RegisterContainer extends Component {
  componentDidMount = () => {
    this.props.fetchSubjects();
    this.props.fetchGroups();
  };

  render = () => <RegisterForm {...this.props} />;
}

RegisterContainer.propTypes = {
  fetchSubjects: PropTypes.func.isRequired,
  fetchGroups: PropTypes.func.isRequired,
};

const mapDispatchToProps = dispatch => ({
  handleSubmit: creds => dispatch(registerUser(creds)),
  fetchSubjects: () => dispatch(fetchSubjects()),
  fetchGroups: () => dispatch(fetchGroups()),
});

const mapStateToProps = ({ auth, timetable }) => ({
  isRegistered: auth.isRegistered,
  subjects: timetable.subjectCodes,
  groups: timetable.groupNames,
});

export default connect(mapStateToProps, mapDispatchToProps)(titled(RegisterContainer, 'Регистрация'));
