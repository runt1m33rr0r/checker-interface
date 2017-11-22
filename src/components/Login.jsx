import React, { Component } from 'react';
import { withStyles } from 'material-ui/styles';
import TextField from 'material-ui/TextField';
import Button from 'material-ui/Button';

import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import * as InterfaceActions from '../actions';

const styles = theme => ({
  container: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    alignContent: 'center',
    flexWrap: 'wrap',
    width: '100%',
    height: '100%',
  },
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
    width: 200,
  },
});

class Login extends Component {
  componentDidMount() {
    this.props.actions.setPageTitle('Вход');
  }

  render() {
    return (
      <form className={this.props.classes.container} noValidate autoComplete="off">
        <TextField
          id="name"
          label="Name"
          className={this.props.classes.textField}
          margin="normal"
        />
        <TextField
          id="password"
          label="Password"
          className={this.props.classes.textField}
          type="password"
          autoComplete="current-password"
          margin="normal"
        />
        <Button raised color="primary" className={this.props.classes.button}>
          Primary
        </Button>
      </form>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(InterfaceActions, dispatch),
});

Login.propTypes = {
  classes: PropTypes.object.isRequired,
  actions: PropTypes.object.isRequired,
};

export default withStyles(styles)(connect(null, mapDispatchToProps)(Login));
