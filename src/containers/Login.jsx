import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';

import LoginForm from '../components/LoginForm';
import * as InterfaceActions from '../actions/interface-actions';
import * as AuthActions from '../actions/auth-actions';

class Login extends Component {
  componentDidMount() {
    this.props.actions.setPageTitle('Вход');
  }

  render() {
    return (
      <LoginForm
        isAuthenticated={this.props.isAuthenticated}
        handleSubmit={this.props.actions.loginUser}
      />
    );
  }
}

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators({ ...InterfaceActions, ...AuthActions }, dispatch),
});

const mapStateToProps = ({ auth }) => ({
  isAuthenticated: auth.isAuthenticated,
});

Login.propTypes = {
  actions: PropTypes.object.isRequired,
  isAuthenticated: PropTypes.bool.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);
