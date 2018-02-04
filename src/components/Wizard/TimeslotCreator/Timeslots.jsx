import React, { Component } from 'react';
import TextField from 'material-ui/TextField';
import PropTypes from 'prop-types';
import List, { ListItem, ListItemSecondaryAction, ListItemText } from 'material-ui/List';
import IconButton from 'material-ui/IconButton';
import DeleteIcon from 'material-ui-icons/Delete';
import MenuItem from 'material-ui/Menu/MenuItem';
import { withStyles } from 'material-ui/styles';

import PrimaryButton from '../../common/PrimaryButton';
import styles from './styles';

class TimeslotCreator extends Component {
  constructor(props) {
    super(props);

    this.state = {
      fromHour: 0,
      fromMinute: 0,
      toHour: 0,
      toMinute: 0,
      day: 1,
      days: ['Понеделник', 'Вторник', 'Сряда', 'Четвъртък', 'Петък', 'Събота', 'Неделя'],
    };
  }

  handleChangeFrom = (e) => {
    const val = e.target.value.split(':');
    console.log(val);
    this.setState({
      fromHour: parseInt(val[0], 10),
      fromMinute: parseInt(val[1], 10),
    });
  };

  handleChangeTo = (e) => {
    const val = e.target.value.split(':');
    this.setState({
      toHour: parseInt(val[0], 10),
      toMinute: parseInt(val[1], 10),
    });
  };

  handleChangeDay = (e) => {
    this.setState({
      day: parseInt(this.state.days.indexOf(e.target.value) + 1, 10),
    });
  };

  timeslotToString = (timeslot) => {
    const week = {
      1: 'Понеделник',
      2: 'Вторник',
      3: 'Сряда',
      4: 'Четвъртък',
      5: 'Петък',
      6: 'Събота',
      7: 'Неделя',
    };
    const day = week[timeslot.day];
    const modifyTime = time => (parseInt(time, 10) <= 9 ? `0${time}` : time);
    const fromHour = modifyTime(timeslot.fromHour);
    const fromMinute = modifyTime(timeslot.fromMinute);
    const toHour = modifyTime(timeslot.toHour);
    const toMinute = modifyTime(timeslot.toMinute);
    return `${day} от ${fromHour}:${fromMinute} до ${toHour}:${toMinute}`;
  };

  render() {
    const { classes, handleRemove, handleAdd } = this.props;

    return (
      <div className={classes.root}>
        <form className={classes.form} noValidate autoComplete="off">
          <div className={classes.pickers}>
            <TextField
              id="fromTime"
              label="От"
              type="time"
              defaultValue="00:00"
              className={classes.textField}
              onChange={this.handleChangeFrom}
            />
            <TextField
              id="toTime"
              label="До"
              type="time"
              defaultValue="00:00"
              className={classes.textField}
              onChange={this.handleChangeTo}
            />
            <TextField
              id="day"
              label="Ден"
              select
              value={this.state.days[this.state.day - 1]}
              className={classes.textField}
              onChange={this.handleChangeDay}
            >
              {this.state.days.map(option => (
                <MenuItem key={option} value={option}>
                  {option}
                </MenuItem>
              ))}
            </TextField>
          </div>
          <PrimaryButton
            onClick={(e) => {
              e.preventDefault();
              handleAdd(
                this.state.fromHour,
                this.state.fromMinute,
                this.state.toHour,
                this.state.toMinute,
                this.state.day,
              );
            }}
            content="Добави"
          />
        </form>
        <List>
          {this.props.timeslots.map(timeslot => (
            <ListItem key={this.timeslotToString(timeslot)} dense className={classes.listItem}>
              <ListItemText primary={this.timeslotToString(timeslot)} />
              <ListItemSecondaryAction>
                <IconButton>
                  <DeleteIcon
                    onClick={() =>
                      handleRemove(
                        timeslot.fromHour,
                        timeslot.fromMinute,
                        timeslot.toHour,
                        timeslot.toMinute,
                        timeslot.day,
                      )
                    }
                  />
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
