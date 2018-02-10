import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

import { checkAuth } from '../../actions/auth-actions';

class PrivateRoute extends Component {
  componentDidMount() {
    this.props.authCheck();
  }

  inRoles = (requiredRoles, actualRoles) => {
    let result = true;
    requiredRoles.forEach((role) => {
      if (actualRoles.includes(role) === false) {
        result = false;
      }
    });

    return result;
  };

  render = () => {
    const {
      component: ProtectedComponent,
      isAuthenticated,
      requiredRoles,
      actualRoles,
      ...rest
    } = this.props;
    return (
      <Route
        render={props =>
          (isAuthenticated && this.inRoles(requiredRoles, actualRoles) ? (
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
  requiredRoles: PropTypes.array.isRequired,
  actualRoles: PropTypes.array.isRequired,
};

const mapStateToProps = ({ auth }) => ({
  isAuthenticated: auth.isAuthenticated,
  actualRoles: auth.roles,
});

const mapDispatchToProps = dispatch => ({
  authCheck: () => dispatch(checkAuth()),
});

export default connect(mapStateToProps, mapDispatchToProps)(PrivateRoute);
