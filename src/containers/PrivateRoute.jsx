import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import PrivRoute from '../components/PrivateRoute';

const PrivateRoute = props => <PrivRoute {...props} isAuthenticated={props.isAuthenticated} />;

PrivateRoute.propTypes = {
  isAuthenticated: PropTypes.bool.isRequired,
};

const mapStateToProps = ({ auth }) => ({
  isAuthenticated: auth.isAuthenticated,
});

export default connect(mapStateToProps)(PrivateRoute);
