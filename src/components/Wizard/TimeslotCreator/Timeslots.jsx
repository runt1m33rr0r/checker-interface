import React, { Component } from 'react';
import TextField from 'material-ui/TextField';
import PropTypes from 'prop-types';
import List, { ListItem, ListItemSecondaryAction, ListItemText } from 'material-ui/List';
import IconButton from 'material-ui/IconButton';
import DeleteIcon from 'material-ui-icons/Delete';
import MenuItem from 'material-ui/Menu/MenuItem';
import { withStyles } from 'material-ui/styles';
import Button from 'material-ui/Button';

import TimePicker from '../../common/TimePicker';
import styles from './styles';

class TimeslotCreator extends Component {
  constructor(props) {
    super(props);

    this.state = {
      fromMinute: 0,
      fromHour: 0,
      toHour: 0,
      toMinute: 0,
      day: 1,
      days: ['Понеделник', 'Вторник', 'Сряда', 'Четвъртък', 'Петък'],
    };
  }

  getTimeslot() {
    const {
      fromHour, fromMinute, toHour, toMinute, day,
    } = this.state;
    const from = `${fromHour < 10 ? `0${fromHour}` : fromHour}:${
      fromMinute < 10 ? `0${fromMinute}` : fromMinute
    }`;
    const to = `${toHour < 10 ? `0${toHour}` : toHour}:${
      toMinute < 10 ? `0${toMinute}` : toMinute
    }`;

    return `${this.state.days[day - 1]} от ${from} до ${to}`;
  }

  handleChangeDay(value) {
    this.setState({
      day: parseInt(this.state.days.indexOf(value) + 1, 10),
    });
  }

  handleChangeFrom(from) {
    this.setState({
      fromMinute: from.getMinutes(),
      fromHour: from.getHours(),
    });
  }

  handleChangeTo(to) {
    this.setState({
      toMinute: to.getMinutes(),
      toHour: to.getHours(),
    });
  }

  render() {
    const { classes, handleRemove, handleAdd } = this.props;

    return (
      <div className={classes.root}>
        <div className={classes.form}>
          <div className={classes.pickers}>
            <TimePicker
              label="От"
              hour={this.state.fromHour}
              minute={this.state.fromMinute}
              handleChange={val => this.handleChangeFrom(val)}
            />
            <TimePicker
              label="До"
              hour={this.state.toHour}
              minute={this.state.toMinute}
              handleChange={val => this.handleChangeTo(val)}
            />
            <TextField
              label="Ден"
              select
              value={this.state.days[this.state.day - 1]}
              onChange={e => this.handleChangeDay(e.target.value)}
              margin="dense"
            >
              {this.state.days.map(option => (
                <MenuItem key={option} value={option}>
                  {option}
                </MenuItem>
              ))}
            </TextField>
          </div>
          <Button
            variant="raised"
            color="primary"
            onClick={(e) => {
              e.preventDefault();
              handleAdd(this.getTimeslot());
            }}
          >
            Добави
          </Button>
        </div>
        <List>
          {this.props.timeslots.map(timeslot => (
            <ListItem key={timeslot} dense>
              <ListItemText primary={timeslot} />
              <ListItemSecondaryAction>
                <IconButton>
                  <DeleteIcon onClick={() => handleRemove(timeslot)} />
                </IconButton>
              </ListItemSecondaryAction>
            </ListItem>
          ))}
        </List>
      </div>
    );
  }
}

TimeslotCreator.propTypes = {
  handleAdd: PropTypes.func.isRequired,
  handleRemove: PropTypes.func.isRequired,
  timeslots: PropTypes.array.isRequired,
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(TimeslotCreator);
