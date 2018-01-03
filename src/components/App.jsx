import React, { Component } from 'react';
import { Route, Switch, withRouter } from 'react-router-dom';

import Header from './Header';
import Login from './Auth/Login';
import Home from './Home';
import Wizard from './Wizard';
import Classbook from './Classbook';
import Register from './Auth/Register';
import PrivateRoute from './common/PrivateRoute';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = { title: 'Home' };
  }

  render() {
    const setTitle = (title) => {
      if (this.state.title !== title) {
        this.setState({ title });
      }
    };

    return (
      <Header title={this.state.title}>
        <Switch>
          <Route exact path="/" render={() => <Home title="Начало" setTitle={setTitle} />} />
          <Route path="/login" render={() => <Login title="Вход" setTitle={setTitle} />} />
          <Route
            path="/register"
            render={() => <Register title="Регистрация" setTitle={setTitle} />}
          />
          <PrivateRoute
            path="/wizard"
            component={Wizard}
            title="Начална настройка"
            setTitle={setTitle}
          />
          <Route path="/book" component={Classbook} />
        </Switch>
      </Header>
    );
  }
}

export default withRouter(App);
