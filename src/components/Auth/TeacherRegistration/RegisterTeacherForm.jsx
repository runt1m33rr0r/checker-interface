import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import {
  TextField,
  Button,
  ListItemText,
  Checkbox,
  MenuItem,
  FormControl,
  Select,
  Input,
  InputLabel,
  FormControlLabel,
} from '@material-ui/core';

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
      subjects: [],
      group: '',
      isLeadTeacher: false,
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleCheckChange = this.handleCheckChange.bind(this);
    this.handleSubjectsChange = this.handleSubjectsChange.bind(this);
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

  handleSubjectsChange(subject) {
    return () => {
      if (this.state.subjects.includes(subject)) {
        return this.setState(prevState => ({
          subjects: prevState.subjects.filter(el => el !== subject),
        }));
      }

      return this.setState(prevState => ({
        subjects: [...prevState.subjects, subject],
      }));
    };
  }

  handleSubmit() {
    this.props.handleSubmit({
      firstName: this.state.firstName,
      lastName: this.state.lastName,
      username: this.state.username,
      password: this.state.password,
      subjects: this.state.subjects,
      group: this.state.group,
      isLeadTeacher: this.state.isLeadTeacher,
    });
  }

  render() {
    const { classes } = this.props;
    return (
      <div className={classes.root}>
        <form className={classes.form}>
          <TextField
            required
            label="Име"
            className={classes.textField}
            value={this.state.firstName}
            onChange={this.handleChange('firstName')}
          />
          <TextField
            required
            label="Фамилия"
            className={classes.textField}
            value={this.state.lastName}
            onChange={this.handleChange('lastName')}
          />
          <TextField
            required
            label="Потребителско име"
            className={classes.textField}
            value={this.state.username}
            onChange={this.handleChange('username')}
          />
          <TextField
            required
            label="Парола"
            className={classes.textField}
            type="password"
            value={this.state.password}
            onChange={this.handleChange('password')}
          />
          <TextField
            required
            label="Потвърди парола"
            className={classes.textField}
            type="password"
            error={this.state.password !== this.state.passwordRepeat}
            value={this.state.passwordRepeat}
            onChange={this.handleChange('passwordRepeat')}
          />
          <FormControl className={classes.textField}>
            <InputLabel htmlFor="subjects-select">Преподавани предмети</InputLabel>
            <Select
              multiple
              value={this.state.subjects}
              onChange={this.handleChange('subjects')}
              input={<Input id="subjects-select" />}
              renderValue={selected => selected.join(', ')}
            >
              {this.props.subjects.map(subject => (
                <MenuItem key={subject} value={subject}>
                  <Checkbox checked={this.state.subjects.includes(subject)} />
                  <ListItemText primary={subject} />
                </MenuItem>
              ))}
            </Select>
          </FormControl>
          {this.state.isLeadTeacher && (
            <TextField
              required
              label="Група"
              select
              value={this.state.group}
              className={classes.textField}
              onChange={this.handleChange('group')}
            >
              {this.props.groups.map(option => (
                <MenuItem key={option} value={option}>
                  {option}
                </MenuItem>
              ))}
            </TextField>
          )}
          <FormControlLabel
            control={
              <Checkbox
                checked={this.state.isLeadTeacher}
                onChange={this.handleCheckChange('isLeadTeacher')}
              />
            }
            label="класен ръководител"
          />
          <Button
            variant="raised"
            color="primary"
            disabled={
              this.state.password.length < 3 ||
              this.state.username.length < 3 ||
              this.state.firstName.length < 3 ||
              this.state.lastName.length < 3 ||
              (this.state.isLeadTeacher && this.state.group === '') ||
              this.state.subjects.length < 1 ||
              this.state.password !== this.state.passwordRepeat ||
              !/^[a-z0-9]+$/.test(this.state.username) ||
              !/^[A-ZА-Я][a-zа-я]+$/.test(this.state.firstName) ||
              !/^[A-ZА-Я][a-zа-я]+$/.test(this.state.lastName)
            }
            onClick={this.handleSubmit}
          >
            Регистрирай
          </Button>
        </form>
      </div>
    );
  }
}

RegisterForm.propTypes = {
  classes: PropTypes.object.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  subjects: PropTypes.array.isRequired,
  groups: PropTypes.array.isRequired,
};

export default withStyles(styles)(RegisterForm);
