import React, { Component } from 'react';
import { withStyles } from 'material-ui/styles';
import TextField from 'material-ui/TextField';
import PropTypes from 'prop-types';
import Typography from 'material-ui/Typography';
import Button from 'material-ui/Button';
import List, {
  ListItem,
  ListItemText,
  ListSubheader,
  ListItemSecondaryAction,
} from 'material-ui/List';
import Checkbox from 'material-ui/Checkbox';
import { MenuItem } from 'material-ui/Menu';
import { FormControlLabel, FormControl } from 'material-ui/Form';
import Select from 'material-ui/Select';
import Input, { InputLabel } from 'material-ui/Input';

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
      // group: '',
      groups: [],
      // userType: 'Student',
      // isLeadTeacher: false,
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleCheckChange = this.handleCheckChange.bind(this);
    // this.handleSubjectsChange = this.handleSubjectsChange.bind(this);
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

  // handleSubjectsChange(subject) {
  //   return () => {
  //     if (this.state.subjects.includes(subject)) {
  //       return this.setState(prevState => ({
  //         subjects: prevState.subjects.filter(el => el !== subject),
  //       }));
  //     }

  //     return this.setState(prevState => ({
  //       subjects: [...prevState.subjects, subject],
  //     }));
  //   };
  // }

  handleSubmit(e) {
    e.preventDefault();
    this.props.handleSubmit({
      userType: this.state.userType,
      firstName: this.state.firstName,
      lastName: this.state.lastName,
      username: this.state.username,
      password: this.state.password,
      groups: this.state.groups,
      // subjects: this.state.subjects,
      // group: this.state.group,
      // isLeadTeacher: this.state.isLeadTeacher,
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
        <form className={this.props.classes.form}>
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
          {/* <TextField
            required
            label="Вид потребител"
            select
            value={this.state.userType}
            className={this.props.classes.textField}
            onChange={this.handleChange('userType')}
          >
            <MenuItem value="Student">Ученик</MenuItem>
            <MenuItem value="Teacher">Учител</MenuItem>
          </TextField> */}
          {/* {(this.state.userType === 'Student' ||
            (this.state.userType === 'Teacher' && this.state.isLeadTeacher)) && (
            <TextField
              required
              label="Група"
              select
              value={this.state.group}
              className={this.props.classes.textField}
              onChange={this.handleChange('group')}
            >
              {this.props.groups.map(option => (
                <MenuItem key={option} value={option}>
                  {option}
                </MenuItem>
              ))}
            </TextField>
          )} */}
          {/* {this.state.userType === 'Teacher' && (
            <div>
              <FormControlLabel
                control={
                  <Checkbox
                    checked={this.state.isLeadTeacher}
                    onChange={this.handleCheckChange('isLeadTeacher')}
                  />
                }
                label="класен ръководител"
              />
              <List
                className={this.props.classes.list}
                disablePadding
                subheader={<ListSubheader>Преподавани предмети:</ListSubheader>}
              >
                {this.props.subjects.map(subject => (
                  <ListItem key={subject}>
                    <ListItemText primary={subject} />
                    <ListItemSecondaryAction>
                      <Checkbox
                        checked={this.state.subjects.includes(subject)}
                        onClick={this.handleSubjectsChange(subject)}
                      />
                    </ListItemSecondaryAction>
                  </ListItem>
                ))}
              </List>
            </div>
          )} */}

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
            disabled={
              this.state.password.length < 3 ||
              this.state.username.length < 3 ||
              this.state.firstName.length < 3 ||
              this.state.lastName.length < 3 ||
              (this.state.isLeadTeacher && this.state.group === '') ||
              (this.state.userType === 'Teacher' && this.state.subjects.length < 1) ||
              (this.state.userType === 'Student' && this.state.group === '')
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
  isRegistered: PropTypes.bool.isRequired,
  // subjects: PropTypes.array.isRequired,
  groups: PropTypes.array.isRequired,
};

export default withStyles(styles)(RegisterForm);
