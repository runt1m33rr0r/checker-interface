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

import styles from '../styles';

class RegisterForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      username: '',
      password: '',
      firstName: '',
      lastName: '',
      subjects: [],
      group: '',
      userType: 'Student',
    };
  }

  handleChange = name => (event) => {
    this.setState({
      [name]: event.target.value,
    });
  };

  handleSubjectsChange = subject => () => {
    if (this.state.subjects.includes(subject)) {
      return this.setState(prevState => ({
        subjects: prevState.subjects.filter(el => el !== subject),
      }));
    }

    return this.setState(prevState => ({
      subjects: [...prevState.subjects, subject],
    }));
  };

  render = () => {
    if (this.props.isRegistered) {
      return (
        <Typography className={this.props.classes.container} variant="display3" gutterBottom>
          Вече сте се регистрирали!
        </Typography>
      );
    }

    return (
      <form className={this.props.classes.container} autoComplete="off">
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
          label="Вид потребител"
          select
          value={this.state.userType}
          className={this.props.classes.textField}
          onChange={this.handleChange('userType')}
        >
          <MenuItem value="Student">Ученик</MenuItem>
          <MenuItem value="Teacher">Учител</MenuItem>
        </TextField>
        {this.state.userType === 'Student' && (
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
        )}
        {this.state.userType === 'Teacher' && (
          <div>
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
        )}
        <Button
          variant="raised"
          color="primary"
          disabled={
            this.state.password.length < 3 ||
            this.state.username.length < 3 ||
            this.state.firstName.length < 3 ||
            this.state.lastName.length < 3 ||
            (this.state.userType === 'Teacher' && this.state.subjects.length < 1) ||
            (this.state.userType === 'Student' && this.state.group === '')
          }
          onClick={(e) => {
            e.preventDefault();
            this.props.handleSubmit({
              userType: this.state.userType,
              firstName: this.state.firstName,
              lastName: this.state.lastName,
              username: this.state.username,
              password: this.state.password,
              subjects: this.state.subjects,
              group: this.state.group,
            });
          }}
        >
          Регистрирай
        </Button>
      </form>
    );
  };
}

RegisterForm.propTypes = {
  classes: PropTypes.object.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  isRegistered: PropTypes.bool.isRequired,
  subjects: PropTypes.array.isRequired,
  groups: PropTypes.array.isRequired,
};

export default withStyles(styles)(RegisterForm);
