import React, { Component } from 'react';
import { withStyles } from 'material-ui/styles';
import TextField from 'material-ui/TextField';
import PropTypes from 'prop-types';
import Typography from 'material-ui/Typography';

import PrimaryButton from '../../common/PrimaryButton';
import styles from '../styles';

class LoginForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      username: '',
      password: '',
    };
  }

  handleChange = name => (event) => {
    this.setState({
      [name]: event.target.value,
    });
  };

  render() {
    if (this.props.isAuthenticated) {
      return (
        <Typography className={this.props.classes.container} type="display3" gutterBottom>
          Вече сте влезли в профила си!
        </Typography>
      );
    }

    return (
      <form className={this.props.classes.container} noValidate autoComplete="off">
        <TextField
          id="name"
          label="Потребителско име"
          className={this.props.classes.textField}
          margin="normal"
          value={this.state.username}
          onChange={this.handleChange('username')}
        />
        <TextField
          id="password"
          label="Парола"
          className={this.props.classes.textField}
          type="password"
          margin="normal"
          value={this.state.password}
          onChange={this.handleChange('password')}
        />
        <PrimaryButton
          onClick={(e) => {
            e.preventDefault();
            this.props.handleSubmit({
              username: this.state.username,
              password: this.state.password,
            });
          }}
          content="Вход"
        />
      </form>
    );
  }
}

LoginForm.propTypes = {
  classes: PropTypes.object.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  isAuthenticated: PropTypes.bool.isRequired,
};

export default withStyles(styles)(LoginForm);
