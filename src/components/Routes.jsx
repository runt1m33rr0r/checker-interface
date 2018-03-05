import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Login from './Auth/Login';
import Home from './Home';
import Wizard from './Wizard';
import Register from './Auth/Register';
import PrivateRoute from './common/PrivateRoute';
import Generator from './Timetable/Generator';
import Checker from './User/Checker';
import Creator from './Timetable/Creator';
import Status from './System/Status';
import UserTable from './Timetable/UserTable';
import AbsencesViewer from './User/AbsencesViewer';

const Routes = () => (
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
      path="/generator"
      component={Generator}
      requiredRoles={['Teacher']}
      title="Генератор на програма"
    />
    <PrivateRoute path="/check" component={Checker} requiredRoles={['Normal']} title="Присъствия" />
    <PrivateRoute
      path="/creator"
      component={Creator}
      requiredRoles={['Normal']}
      title="Създаване на програма"
    />
    <PrivateRoute
      path="/status"
      component={Status}
      requiredRoles={['Teacher']}
      title="Състояние на системата"
    />
    <PrivateRoute
      path="/timetable"
      component={UserTable}
      requiredRoles={['Student', 'Teacher']}
      title="Моята програма"
    />
    <PrivateRoute
      path="/absences"
      component={AbsencesViewer}
      requiredRoles={['Student', 'Teacher']}
      title="Отсъствия"
    />
  </Switch>
);

export default Routes;
