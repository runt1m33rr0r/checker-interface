import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import LoginForm from './LoginForm';
import { loginUser } from '../../../actions/auth-actions';
import { setTitle } from '../../../actions/ui-actions';

class LoginContainer extends Component {
  componentDidMount = () => this.props.setTitle(this.props.title);

  render = () => <LoginForm {...this.props} />;
}

LoginContainer.propTypes = {
  title: PropTypes.string.isRequired,
  setTitle: PropTypes.func.isRequired,
};

const mapDispatchToProps = dispatch => ({
  handleSubmit: creds => dispatch(loginUser(creds)),
  setTitle: title => dispatch(setTitle(title)),
});

const mapStateToProps = ({ auth }) => ({
  isAuthenticated: auth.isAuthenticated,
});

export default connect(mapStateToProps, mapDispatchToProps)(LoginContainer);
