import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import PropTypes from 'prop-types';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

import styles from '../styles';

class LoginForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      username: '',
      password: '',
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(name) {
    return event =>
      this.setState({
        [name]: event.target.value,
      });
  }

  handleSubmit() {
    this.props.handleSubmit({
      username: this.state.username,
      password: this.state.password,
    });
  }

  render() {
    const { classes, isAuthenticated } = this.props;
    return (
      <div className={classes.root}>
        {isAuthenticated && (
          <Typography className={classes.text} variant="display3">
            Успешно сте влезли в профила си!
          </Typography>
        )}
        {!isAuthenticated && (
          <div className={classes.form}>
            <TextField
              required
              id="name"
              label="Потребителско име"
              className={classes.textField}
              margin="normal"
              value={this.state.username}
              onChange={this.handleChange('username')}
            />
            <TextField
              required
              id="password"
              label="Парола"
              className={classes.textField}
              type="password"
              margin="normal"
              value={this.state.password}
              onChange={this.handleChange('password')}
            />
            <Button
              variant="raised"
              color="primary"
              disabled={this.state.password.length < 3 || this.state.username.length < 3}
              onClick={this.handleSubmit}
            >
              Вход
            </Button>
          </div>
        )}
      </div>
    );
  }
}

LoginForm.propTypes = {
  classes: PropTypes.object.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  isAuthenticated: PropTypes.bool.isRequired,
};

export default withStyles(styles)(LoginForm);
