import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import RegisterForm from './RegisterForm';
import { registerUser } from '../../../actions/auth-actions';
import { setTitle } from '../../../actions/ui-actions';
import { fetchSubjects } from '../../../actions/timetable-actions';

class RegisterContainer extends Component {
  componentDidMount = () => {
    this.props.setTitle(this.props.title);
    this.props.fetchSubjects();
  };

  render = () => <RegisterForm {...this.props} />;
}

RegisterContainer.propTypes = {
  title: PropTypes.string.isRequired,
  setTitle: PropTypes.func.isRequired,
  fetchSubjects: PropTypes.func.isRequired,
};

const mapDispatchToProps = dispatch => ({
  handleSubmit: creds => dispatch(registerUser(creds)),
  setTitle: title => dispatch(setTitle(title)),
  fetchSubjects: () => dispatch(fetchSubjects()),
});

const mapStateToProps = ({ auth, timetable }) => ({
  isRegistered: auth.isRegistered,
  subjects: timetable.subjects,
});

export default connect(mapStateToProps, mapDispatchToProps)(RegisterContainer);
