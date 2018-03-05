import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { MuiThemeProvider, createMuiTheme } from 'material-ui/styles';
import purple from 'material-ui/colors/purple';
import green from 'material-ui/colors/green';
import Reboot from 'material-ui/Reboot';
import { withRouter } from 'react-router-dom';

import Header from './Header';
import Routes from './Routes';
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
        <Routes />
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
