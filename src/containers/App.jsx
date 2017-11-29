import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';

import Main from '../components/Main';
import Routes from '../components/Routes';

const App = ({ title, isAuthenticated, username }) => (
  <Main isAuthenticated={isAuthenticated} username={username} title={title}>
    <Routes />
  </Main>
);

const mapStateToProps = ({ userInterface, auth }) => ({
  title: userInterface.title,
  isAuthenticated: auth.isAuthenticated,
  username: auth.username,
});

App.propTypes = {
  title: PropTypes.string.isRequired,
  isAuthenticated: PropTypes.bool.isRequired,
  username: PropTypes.string.isRequired,
};

export default withRouter(connect(mapStateToProps)(App));
