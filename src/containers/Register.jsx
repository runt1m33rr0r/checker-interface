import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';

import RegisterForm from '../components/RegisterForm';
import * as InterfaceActions from '../actions';

class Register extends Component {
  componentDidMount() {
    this.props.actions.setPageTitle('Регистрация');
  }

  render() {
    return <RegisterForm />;
  }
}

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(InterfaceActions, dispatch),
});

Register.propTypes = {
  actions: PropTypes.object.isRequired,
};

export default connect(null, mapDispatchToProps)(Register);
