import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

import { checkAuth } from '../../actions/auth-actions';

class PrivateRoute extends Component {
  constructor(props) {
    super(props);
    this.props.authCheck();
  }

  render = () => {
    const { component: ProtectedComponent, isAuthenticated, ...rest } = this.props;
    return (
      <Route
        render={props =>
          (isAuthenticated ? (
            <ProtectedComponent {...rest} />
          ) : (
            <Redirect
              to={{
                pathname: '/login',
                state: { from: props.location },
              }}
            />
          ))
        }
      />
    );
  };
}

PrivateRoute.propTypes = {
  component: PropTypes.any.isRequired,
  isAuthenticated: PropTypes.bool.isRequired,
  location: PropTypes.object.isRequired,
  authCheck: PropTypes.func.isRequired,
};

const mapStateToProps = ({ auth }) => ({
  isAuthenticated: auth.isAuthenticated,
});

const mapDispatchToProps = dispatch => ({
  authCheck: () => dispatch(checkAuth()),
});

export default connect(mapStateToProps, mapDispatchToProps)(PrivateRoute);
