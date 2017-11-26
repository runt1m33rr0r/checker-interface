import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';

import LoginForm from '../components/LoginForm';
import * as InterfaceActions from '../actions';

class Login extends Component {
  componentDidMount() {
    this.props.actions.setPageTitle('Вход');
  }

  render() {
    return <LoginForm />;
  }
}

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(InterfaceActions, dispatch),
});

Login.propTypes = {
  actions: PropTypes.object.isRequired,
};

export default connect(null, mapDispatchToProps)(Login);
