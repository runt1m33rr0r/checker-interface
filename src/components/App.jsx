import React, { Component } from 'react';
import { Route, Switch, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { MuiThemeProvider, createMuiTheme } from 'material-ui/styles';
import purple from 'material-ui/colors/purple';
import green from 'material-ui/colors/green';
import Reboot from 'material-ui/Reboot';

import Header from './Header';
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
import { getDarkness } from '../actions/ui-actions';

class App extends Component {
  componentDidMount = () => {
    this.props.getDarkness();
  };

  getTheme = () => {
    if (this.props.dark === true) {
      return createMuiTheme({
        palette: {
          primary: purple,
          secondary: green,
          type: 'dark',
        },
      });
    }

    return createMuiTheme({
      palette: {
        primary: purple,
        secondary: green,
        type: 'light',
      },
    });
  };

  render = () => (
    <MuiThemeProvider theme={this.getTheme()}>
      <Reboot />
      <Header title={this.props.title}>
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
          <PrivateRoute
            path="/check"
            component={Checker}
            requiredRoles={['Normal']}
            title="Присъствия"
          />
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
      </Header>
    </MuiThemeProvider>
  );
}

App.propTypes = {
  title: PropTypes.string.isRequired,
  dark: PropTypes.bool.isRequired,
  getDarkness: PropTypes.func.isRequired,
};

const mapStateToProps = ({ ui }) => ({
  title: ui.title,
  dark: ui.dark,
});

const mapDispatchToProps = dispatch => ({
  getDarkness: () => dispatch(getDarkness()),
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(App));
