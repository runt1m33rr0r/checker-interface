import React from 'react';
import { withStyles } from 'material-ui/styles';
import TextField from 'material-ui/TextField';
import Button from 'material-ui/Button';
import PropTypes from 'prop-types';

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

const LoginForm = props => (
  <form className={props.classes.container} noValidate autoComplete="off">
    <TextField id="name" label="Name" className={props.classes.textField} margin="normal" />
    <TextField
      id="password"
      label="Password"
      className={props.classes.textField}
      type="password"
      autoComplete="current-password"
      margin="normal"
    />
    <Button raised color="primary" className={props.classes.button}>
      Primary
    </Button>
  </form>
);

LoginForm.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(LoginForm);
