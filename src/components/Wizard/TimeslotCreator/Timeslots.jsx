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
      toHour: 0,
      fromMinute: 0,
      toMinute: 0,
      day: 1,
      days: ['Понеделник', 'Вторник', 'Сряда', 'Четвъртък', 'Петък', 'Събота', 'Неделя'],
    };
  }

  handleChangeFrom = (e) => {
    const val = e.target.value.split(':');
    this.setState({
      fromHour: parseInt(val[0], 10),
      fromMinute: parseInt(val[1], 10),
    });
  };

  handleChangeTo = (e) => {
    const val = e.target.value.split(':');
    this.setState({
      fromHour: parseInt(val[0], 10),
      fromMinute: parseInt(val[1], 10),
    });
  };

  handleChangeDay = (e) => {
    this.setState({
      day: parseInt(this.state.days.indexOf(e.target.value) + 1, 10),
    });
  };

  render() {
    const { classes } = this.props;

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
              this.props.handleAdd(
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
            <ListItem
              key={`${timeslot.fromHour}:${timeslot.fromMinute}-${timeslot.toHour}:${
                timeslot.toMinute
              }-${timeslot.day}`}
              dense
              className={classes.listItem}
            >
              <ListItemText
                primary={`${timeslot.fromHour}:${timeslot.fromMinute}-${timeslot.toHour}:${
                  timeslot.toMinute
                }-${timeslot.day}`}
              />
              <ListItemSecondaryAction>
                <IconButton
                  onClick={(e) => {
                    e.preventDefault();
                    this.props.handleRemove(
                      this.state.fromHour,
                      this.state.fromMinute,
                      this.state.toHour,
                      this.state.toMinute,
                      this.state.day,
                    );
                  }}
                >
                  <DeleteIcon />
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
