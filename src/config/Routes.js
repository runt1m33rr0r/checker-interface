import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Login from '../components/Login';
import Home from '../components/Home';
import Wizard from '../components/Wizard';
import Classbook from '../components/Classbook';

const Routes = () => (
  <Switch>
    <Route exact path="/" component={Home} />
    <Route path="/home" component={Home} />
    <Route path="/login" component={Login} />
    <Route path="/wizard" component={Wizard} />
    <Route path="/book" component={Classbook} />
  </Switch>
);

export default Routes;
