import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';

import Main from '../components/Main';
import Routes from '../config/Routes';

const App = ({ title }) => (
  <Main title={title}>
    <Routes />
  </Main>
);

const mapStateToProps = ({ userInterface }) => ({
  title: userInterface.title,
});

App.propTypes = {
  title: PropTypes.string.isRequired,
};

export default withRouter(connect(mapStateToProps)(App));
