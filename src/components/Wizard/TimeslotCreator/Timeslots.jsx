import React, { Component } from 'react';
import TextField from 'material-ui/TextField';
import PropTypes from 'prop-types';
import List, { ListItem, ListItemSecondaryAction, ListItemText } from 'material-ui/List';
import IconButton from 'material-ui/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';
import MenuItem from 'material-ui/Menu/MenuItem';
import { withStyles } from 'material-ui/styles';
import Button from 'material-ui/Button';

import TimePicker from '../../common/TimePicker';
import styles from './styles';

class TimeslotCreator extends Component {
  constructor(props) {
    super(props);

    this.state = {
      fromTime: new Date(2000, 0, 0, 0, 0),
      toTime: new Date(2000, 0, 0, 0, 0),
      day: 1,
      days: ['Понеделник', 'Вторник', 'Сряда', 'Четвъртък', 'Петък'],
    };

    this.handleChangeTime = this.handleChangeTime.bind(this);
    this.handleChangeDay = this.handleChangeDay.bind(this);
  }

  getTimeslot() {
    const fromHour = this.state.fromTime.getHours();
    const fromMinute = this.state.fromTime.getMinutes();
    const toHour = this.state.toTime.getHours();
    const toMinute = this.state.toTime.getMinutes();

    const from = `${fromHour < 10 ? `0${fromHour}` : fromHour}:${
      fromMinute < 10 ? `0${fromMinute}` : fromMinute
    }`;
    const to = `${toHour < 10 ? `0${toHour}` : toHour}:${
      toMinute < 10 ? `0${toMinute}` : toMinute
    }`;

    return `${this.state.days[this.state.day - 1]} от ${from} до ${to}`;
  }

  handleChangeDay(e) {
    this.setState({
      day: parseInt(this.state.days.indexOf(e.target.value) + 1, 10),
    });
  }

  handleChangeTime(timeName) {
    return time => this.setState({ [timeName]: time });
  }

  render() {
    const { classes, handleRemove, handleAdd } = this.props;

    return (
      <div className={classes.root}>
        <div className={classes.form}>
          <div className={classes.pickers}>
            <TimePicker
              label="От"
              defaultTime={this.state.fromTime}
              handleChange={this.handleChangeTime('fromTime')}
            />
            <TimePicker
              label="До"
              defaultTime={this.state.toTime}
              handleChange={this.handleChangeTime('toTime')}
            />
            <TextField
              label="Ден"
              select
              value={this.state.days[this.state.day - 1]}
              onChange={this.handleChangeDay}
              margin="dense"
            >
              {this.state.days.map(option => (
                <MenuItem key={option} value={option}>
                  {option}
                </MenuItem>
              ))}
            </TextField>
          </div>
          <Button variant="raised" color="primary" onClick={handleAdd(this.getTimeslot())}>
            Добави
          </Button>
        </div>
        <List>
          {this.props.timeslots.map(timeslot => (
            <ListItem key={timeslot} dense>
              <ListItemText primary={timeslot} />
              <ListItemSecondaryAction>
                <IconButton>
                  <DeleteIcon onClick={handleRemove(timeslot)} />
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
