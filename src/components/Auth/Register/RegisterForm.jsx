import React, { Component } from 'react';
import { withStyles } from 'material-ui/styles';
import TextField from 'material-ui/TextField';
import PropTypes from 'prop-types';
import Typography from 'material-ui/Typography';
import Button from 'material-ui/Button';
import List, { ListItem, ListItemText } from 'material-ui/List';
import Checkbox from 'material-ui/Checkbox';

import styles from '../styles';

class RegisterForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      username: '',
      password: '',
      subjects: [],
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
        <div>
          <List disablePadding dense>
            {this.props.subjects.map(subject => (
              <ListItem key={subject.code}>
                <Checkbox
                  checked={this.state.subjects.includes(subject.code)}
                  onClick={this.handleSubjectsChange(subject.code)}
                />
                <ListItemText primary={subject.code} />
              </ListItem>
            ))}
          </List>
        </div>
        <Button
          variant="raised"
          color="primary"
          disabled={this.state.password.length < 3 || this.state.username.length < 3}
          onClick={(e) => {
            e.preventDefault();
            this.props.handleSubmit({
              username: this.state.username,
              password: this.state.password,
              subjects: this.state.subjects,
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
};

export default withStyles(styles)(RegisterForm);
