import { connect } from 'react-redux';
import React, { Component } from 'react';
import PropTypes from 'prop-types';

import LoginForm from './LoginForm';
import { loginUser } from '../../../actions/auth-actions';

class LoginContainer extends Component {
  componentDidMount() {
    this.props.setTitle(this.props.title);
  }

  render() {
    return <LoginForm {...this.props} />;
  }
}

LoginContainer.propTypes = {
  title: PropTypes.string.isRequired,
  setTitle: PropTypes.func.isRequired,
};

const mapDispatchToProps = dispatch => ({
  handleSubmit: creds => dispatch(loginUser(creds)),
});

const mapStateToProps = ({ auth }) => ({
  isAuthenticated: auth.isAuthenticated,
});

export default connect(mapStateToProps, mapDispatchToProps)(LoginContainer);
