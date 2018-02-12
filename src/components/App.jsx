import React from 'react';
import { Route, Switch, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import Header from './Header';
import Login from './Auth/Login';
import Home from './Home';
import Wizard from './Wizard';
// import Classbook from './Classbook';
import Register from './Auth/Register';
import PrivateRoute from './common/PrivateRoute';

import Generator from './Timetable/Generator';

const App = props => (
  <Header title={props.title}>
    <Switch>
      <Route exact path="/" render={() => <Home title="Начало" />} />
      <Route path="/login" render={() => <Login title="Вход" />} />
      <Route path="/register" render={() => <Register title="Регистрация" />} />
      <PrivateRoute
        path="/wizard"
        component={Wizard}
        requiredRoles={['Teacher']}
        title="Начална настройка"
      />
      <PrivateRoute
        path="/timetable"
        component={Generator}
        requiredRoles={['Teacher']}
        title="Генератор на програма"
      />
    </Switch>
  </Header>
);

App.propTypes = {
  title: PropTypes.string.isRequired,
};

const mapStateToProps = ({ ui }) => ({
  title: ui.title,
});

export default withRouter(connect(mapStateToProps)(App));
