import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Login from '../containers/Login';
import Home from '../containers/Home';
import Wizard from '../containers/Wizard';
import Classbook from '../containers/Classbook';
import Register from '../containers/Register';
import PrivateRoute from '../containers/PrivateRoute';

const Routes = () => (
  <Switch>
    <Route exact path="/" component={Home} />
    <Route path="/login" component={Login} />
    <Route path="/register" component={Register} />
    <PrivateRoute path="/wizard" component={Wizard} />
    <Route path="/book" component={Classbook} />
  </Switch>
);

export default Routes;
