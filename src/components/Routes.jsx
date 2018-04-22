import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Login from './Auth/Login';
import Home from './Home';
import Wizard from './Wizard';
import StudentRegistration from './Auth/StudentRegistration';
import TeacherRegistration from './Auth/TeacherRegistration';
import PrivateRoute from './common/PrivateRoute';
import Generator from './Timetable/Generator';
import Checker from './User/Checker';
import Creator from './Timetable/Creator';
import Status from './System/Status';
import UserTable from './Timetable/UserTable';
import AbsencesViewer from './User/AbsencesViewer';

const Routes = () => (
  <Switch>
    <Route exact path="/" component={Home} />
    <Route path="/login" component={Login} />
    <Route path="/register" component={StudentRegistration} />
    <PrivateRoute
      path="/register-teacher"
      component={TeacherRegistration}
      requiredRoles={['Admin']}
    />
    <PrivateRoute path="/wizard" component={Wizard} requiredRoles={['Teacher']} />
    <PrivateRoute path="/generator" component={Generator} requiredRoles={['Teacher']} />
    <PrivateRoute path="/check" component={Checker} requiredRoles={['Normal']} />
    <PrivateRoute path="/creator" component={Creator} requiredRoles={['Normal']} />
    <PrivateRoute path="/status" component={Status} requiredRoles={['Teacher']} />
    <PrivateRoute path="/timetable" component={UserTable} requiredRoles={['Student', 'Teacher']} />
    <PrivateRoute
      path="/absences"
      component={AbsencesViewer}
      requiredRoles={['Student', 'Teacher']}
    />
  </Switch>
);

export default Routes;
