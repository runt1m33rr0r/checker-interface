import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

import { checkAuth } from '../../actions/auth.actions';

class PrivateRoute extends Component {
  componentDidMount() {
    this.props.authCheck();
  }

  inRoles = (requiredRoles, actualRoles) => {
    if (this.props.allRequired === true) {
      for (let i = 0; i < requiredRoles.length; i += 1) {
        if (actualRoles.includes(requiredRoles[i]) === false) {
          return false;
        }
      }
      return true;
    }

    if (!this.props.allRequired) {
      for (let i = 0; i < requiredRoles.length; i += 1) {
        if (actualRoles.includes(requiredRoles[i]) === true) {
          return true;
        }
      }
      return false;
    }
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

PrivateRoute.defaultProps = {
  allRequired: false,
};

PrivateRoute.propTypes = {
  component: PropTypes.any.isRequired,
  isAuthenticated: PropTypes.bool.isRequired,
  location: PropTypes.object.isRequired,
  authCheck: PropTypes.func.isRequired,
  requiredRoles: PropTypes.array.isRequired,
  allRequired: PropTypes.bool,
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
