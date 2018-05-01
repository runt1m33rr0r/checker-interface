import React, { Component } from 'react';
import { withStyles } from 'material-ui/styles';
import TextField from 'material-ui/TextField';
import PropTypes from 'prop-types';
import Typography from 'material-ui/Typography';
import Button from 'material-ui/Button';
import { ListItemText } from 'material-ui/List';
import Checkbox from 'material-ui/Checkbox';
import { MenuItem } from 'material-ui/Menu';
import { FormControl } from 'material-ui/Form';
import Select from 'material-ui/Select';
import Input, { InputLabel } from 'material-ui/Input';
import { Link } from 'react-router-dom';

import styles from '../styles';

class RegisterForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      username: '',
      password: '',
      passwordRepeat: '',
      firstName: '',
      lastName: '',
      groups: [],
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleCheckChange = this.handleCheckChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(name) {
    return event =>
      this.setState({
        [name]: event.target.value,
      });
  }

  handleCheckChange(name) {
    return event => this.setState({ [name]: event.target.checked });
  }

  handleSubmit() {
    this.props.handleSubmit({
      userType: this.state.userType,
      firstName: this.state.firstName,
      lastName: this.state.lastName,
      username: this.state.username,
      password: this.state.password,
      groups: this.state.groups,
    });
  }

  render() {
    if (this.props.isRegistered) {
      return (
        <Typography className={this.props.classes.container} variant="display3" gutterBottom>
          Вече сте се регистрирали!
        </Typography>
      );
    }

    return (
      <div className={this.props.classes.root}>
        <div className={this.props.classes.form}>
          <TextField
            required
            label="Име"
            className={this.props.classes.textField}
            value={this.state.firstName}
            onChange={this.handleChange('firstName')}
          />
          <TextField
            required
            label="Фамилия"
            className={this.props.classes.textField}
            value={this.state.lastName}
            onChange={this.handleChange('lastName')}
          />
          <TextField
            required
            label="Потребителско име"
            className={this.props.classes.textField}
            value={this.state.username}
            onChange={this.handleChange('username')}
          />
          <TextField
            required
            label="Парола"
            className={this.props.classes.textField}
            type="password"
            value={this.state.password}
            onChange={this.handleChange('password')}
          />
          <TextField
            required
            label="Потвърди парола"
            className={this.props.classes.textField}
            type="password"
            error={this.state.password !== this.state.passwordRepeat}
            value={this.state.passwordRepeat}
            onChange={this.handleChange('passwordRepeat')}
          />
          <FormControl className={this.props.classes.textField}>
            <InputLabel htmlFor="groups-select">Групи</InputLabel>
            <Select
              multiple
              value={this.state.groups}
              onChange={this.handleChange('groups')}
              input={<Input id="groups-select" />}
              renderValue={selected => selected.join(', ')}
            >
              {this.props.groups.map(groupName => (
                <MenuItem key={groupName} value={groupName}>
                  <Checkbox checked={this.state.groups.includes(groupName)} />
                  <ListItemText primary={groupName} />
                </MenuItem>
              ))}
            </Select>
          </FormControl>
          <Button
            variant="raised"
            color="primary"
            component={Link}
            to="/"
            disabled={
              this.state.password.length < 3 ||
              this.state.username.length < 3 ||
              this.state.firstName.length < 3 ||
              this.state.lastName.length < 3 ||
              this.state.groups.length < 1 ||
              !/^[a-z0-9]+$/.test(this.state.username) ||
              !/^[A-Z][a-z]+$/.test(this.state.firstName) ||
              !/^[A-Z][a-z]+$/.test(this.state.lastName) ||
              this.state.password !== this.state.passwordRepeat
            }
            onClick={this.handleSubmit}
          >
            Регистрирай
          </Button>
        </div>
      </div>
    );
  }
}

RegisterForm.propTypes = {
  classes: PropTypes.object.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  isRegistered: PropTypes.bool.isRequired,
  groups: PropTypes.array.isRequired,
};

export default withStyles(styles)(RegisterForm);