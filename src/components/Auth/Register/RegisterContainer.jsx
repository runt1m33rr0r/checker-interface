import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import RegisterForm from './RegisterForm';
import { registerUser } from '../../../actions/auth-actions';
import { setTitle } from '../../../actions/ui-actions';

class RegisterContainer extends Component {
  componentDidMount() {
    this.props.setTitle(this.props.title);
  }

  render() {
    return <RegisterForm {...this.props} />;
  }
}

RegisterContainer.propTypes = {
  title: PropTypes.string.isRequired,
  setTitle: PropTypes.func.isRequired,
};

const mapDispatchToProps = dispatch => ({
  handleSubmit: creds => dispatch(registerUser(creds)),
  setTitle: title => dispatch(setTitle(title)),
});

const mapStateToProps = ({ auth }) => ({
  isRegistered: auth.isRegistered,
});

export default connect(mapStateToProps, mapDispatchToProps)(RegisterContainer);
