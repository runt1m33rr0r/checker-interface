import { connect } from 'react-redux';
import React, { Component } from 'react';
import PropTypes from 'prop-types';

import RegisterForm from './RegisterForm';
import { registerUser } from '../../../actions/auth-actions';
import toJS from '../../common/ToJS';

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
});

const mapStateToProps = state => ({
  isRegistered: state.get('auth').get('isRegistered'),
});

export default connect(mapStateToProps, mapDispatchToProps)(toJS(RegisterContainer));
