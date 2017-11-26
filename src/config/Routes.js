import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';

import Login from '../containers/Login';
import Home from '../containers/Home';
import Wizard from '../containers/Wizard';
import Classbook from '../containers/Classbook';

const Routes = () => (
  <Switch>
    <Route exact path="/" component={Home} />
    <Route path="/login" component={Login} />
    <Route path="/wizard" component={Wizard} />
    <Route path="/book" component={Classbook} />
    <Redirect component={Home} />
  </Switch>
);

export default Routes;
