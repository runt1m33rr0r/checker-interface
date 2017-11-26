import React from 'react';
import { withStyles } from 'material-ui/styles';
import TextField from 'material-ui/TextField';
import PropTypes from 'prop-types';

import PrimaryButton from './common/PrimaryButton';
import styles from '../styles/forms';

const LoginForm = props => (
  <form className={props.classes.container} noValidate autoComplete="off">
    <TextField
      id="name"
      label="Потребителско име"
      className={props.classes.textField}
      margin="normal"
    />
    <TextField
      id="password"
      label="Парола"
      className={props.classes.textField}
      type="password"
      margin="normal"
    />
    <PrimaryButton content="Вход" />
  </form>
);

LoginForm.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(LoginForm);
