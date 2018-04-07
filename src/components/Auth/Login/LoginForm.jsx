import React, { Component } from 'react';
import { withStyles } from 'material-ui/styles';
import TextField from 'material-ui/TextField';
import PropTypes from 'prop-types';
import Typography from 'material-ui/Typography';
import Button from 'material-ui/Button';

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

  handleSubmit(e) {
    e.preventDefault();
    this.props.handleSubmit({
      username: this.state.username,
      password: this.state.password,
    });
  }

  render() {
    if (this.props.isAuthenticated) {
      return (
        <Typography className={this.props.classes.container} variant="display3" gutterBottom>
          Вече сте влезли в профила си!
        </Typography>
      );
    }

    return (
      <div className={this.props.classes.root}>
        <form className={this.props.classes.form}>
          <TextField
            required
            id="name"
            label="Потребителско име"
            className={this.props.classes.textField}
            margin="normal"
            value={this.state.username}
            onChange={this.handleChange('username')}
          />
          <TextField
            required
            id="password"
            label="Парола"
            className={this.props.classes.textField}
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
        </form>
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
