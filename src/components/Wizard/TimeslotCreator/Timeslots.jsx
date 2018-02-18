import React, { Component } from 'react';
import TextField from 'material-ui/TextField';
import PropTypes from 'prop-types';
import List, { ListItem, ListItemSecondaryAction, ListItemText } from 'material-ui/List';
import IconButton from 'material-ui/IconButton';
import DeleteIcon from 'material-ui-icons/Delete';
import MenuItem from 'material-ui/Menu/MenuItem';
import { withStyles } from 'material-ui/styles';
import Button from 'material-ui/Button';

import styles from './styles';

class TimeslotCreator extends Component {
  constructor(props) {
    super(props);

    this.state = {
      from: '00:00',
      to: '00:00',
      day: 1,
      days: ['Понеделник', 'Вторник', 'Сряда', 'Четвъртък', 'Петък'],
    };
  }

  handleChangeFrom = (e) => {
    this.setState({
      from: e.target.value,
    });
  };

  handleChangeTo = (e) => {
    this.setState({
      to: e.target.value,
    });
  };

  handleChangeDay = (e) => {
    this.setState({
      day: parseInt(this.state.days.indexOf(e.target.value) + 1, 10),
    });
  };

  getTimeslot = () => {
    const { from, to, day } = this.state;
    return `${this.state.days[day - 1]} от ${from} до ${to}`;
  };

  render = () => {
    const { classes, handleRemove, handleAdd } = this.props;

    return (
      <div className={classes.root}>
        <form className={classes.form} noValidate autoComplete="off">
          <div className={classes.pickers}>
            <TextField
              label="От"
              type="time"
              defaultValue={this.state.from}
              className={classes.textField}
              onChange={this.handleChangeFrom}
            />
            <TextField
              label="До"
              type="time"
              defaultValue={this.state.to}
              className={classes.textField}
              onChange={this.handleChangeTo}
            />
            <TextField
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
        </form>
        <List>
          {this.props.timeslots.map(timeslot => (
            <ListItem key={timeslot} dense className={classes.listItem}>
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
  };
}

TimeslotCreator.propTypes = {
  handleAdd: PropTypes.func.isRequired,
  handleRemove: PropTypes.func.isRequired,
  timeslots: PropTypes.array.isRequired,
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(TimeslotCreator);
