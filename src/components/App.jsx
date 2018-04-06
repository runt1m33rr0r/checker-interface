import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { MuiThemeProvider, createMuiTheme } from 'material-ui/styles';
import purple from 'material-ui/colors/purple';
import green from 'material-ui/colors/green';
import CssBaseline from 'material-ui/CssBaseline';
import { withRouter } from 'react-router-dom';

import Header from './Header';
import Routes from './Routes';
import { getDarkness } from '../actions/ui.actions';

class App extends Component {
  componentDidMount() {
    this.props.getDarkness();
  }

  getTheme() {
    return createMuiTheme({
      palette: {
        primary: purple,
        secondary: green,
        type: this.props.dark === true ? 'dark' : 'light',
      },
    });
  }

  render() {
    return (
      <MuiThemeProvider theme={this.getTheme()}>
        <CssBaseline />
        <Header title={this.props.title}>
          <Routes />
        </Header>
      </MuiThemeProvider>
    );
  }
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
