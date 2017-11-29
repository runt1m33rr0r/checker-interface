import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';

import RegisterForm from '../components/RegisterForm';
import * as InterfaceActions from '../actions/interface-actions';
import * as AuthActions from '../actions/auth-actions';

class Register extends Component {
  componentDidMount() {
    this.props.actions.setPageTitle('Регистрация');
  }

  render() {
    return (
      <RegisterForm
        isRegistered={this.props.isRegistered}
        handleSubmit={this.props.actions.registerUser}
      />
    );
  }
}

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators({ ...InterfaceActions, ...AuthActions }, dispatch),
});

const mapStateToProps = ({ auth }) => ({
  isRegistered: auth.isRegistered,
});

Register.propTypes = {
  actions: PropTypes.object.isRequired,
  isRegistered: PropTypes.bool.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(Register);
