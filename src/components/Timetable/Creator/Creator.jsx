import React, { Component } from 'react';
import PropTypes from 'prop-types';
import MenuItem from 'material-ui/Menu/MenuItem';
import { withStyles } from 'material-ui/styles';
import Select from 'material-ui/Select';
import { FormControl } from 'material-ui/Form';
import { InputLabel } from 'material-ui/Input';
import Button from 'material-ui/Button';

import TabView from '../../common/TabView';
import Table from '../Table';

import styles from './styles';

class Creator extends Component {
  constructor(props) {
    super(props);

    this.state = {
      timeslotIdx: 0,
      subjectIdx: 0,
      teacherIdx: 0,
      groupIdx: 0,
    };
  }

  timeslotToString = (timeslot) => {
    const days = ['Понеделник', 'Вторник', 'Сряда', 'Четвъртък', 'Петък'];
    const day = days[timeslot.day - 1];
    const fromHour = timeslot.fromHour > 9 ? timeslot.fromHour : `0${timeslot.fromHour}`;
    const fromMinute = timeslot.fromMinute > 9 ? timeslot.fromMinute : `0${timeslot.fromMinute}`;
    const toHour = timeslot.toHour > 9 ? timeslot.toHour : `0${timeslot.toHour}`;
    const toMinute = timeslot.toMinute > 9 ? timeslot.toMinute : `0${timeslot.toMinute}`;

    return `${day} от ${fromHour}:${fromMinute} до ${toHour}:${toMinute}`;
  };

  handleChange = (valueName, value) => {
    this.setState({ [valueName]: value });
  };

  render = () => (
    <div className={this.props.classes.root}>
      <TabView tabNames={this.props.groupNames}>
        {this.props.groupNames.map(name => <Table key={name} groupName={name} />)}
      </TabView>
      <div className={this.props.classes.createForm}>
        <FormControl>
          <InputLabel htmlFor="time">Време</InputLabel>
          <Select
            value={this.state.timeslotIdx}
            id="time"
            onChange={e => this.handleChange('timeslotIdx', e.target.value)}
          >
            {this.props.timeslots.map((option, idx) => (
              <MenuItem key={this.timeslotToString(option)} value={idx}>
                {this.timeslotToString(option)}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
        <FormControl>
          <InputLabel htmlFor="subject">Предмет</InputLabel>
          <Select
            value={this.state.subjectIdx}
            id="subject"
            onChange={e => this.handleChange('subject', e.target.value)}
          >
            {this.props.subjectCodes.map((option, idx) => (
              <MenuItem key={option} value={idx}>
                {option}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
        <FormControl>
          <InputLabel htmlFor="teacher">Учител/ка</InputLabel>
          <Select
            value={this.state.teacherIdx}
            id="teacher"
            onChange={e => this.handleChange('teacherIdx', e.target.value)}
          >
            {this.props.teachers.map((option, idx) => (
              <MenuItem key={option} value={idx}>
                {option}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
        <FormControl>
          <InputLabel htmlFor="group">Клас</InputLabel>
          <Select
            value={this.state.groupIdx}
            id="group"
            onChange={e => this.handleChange('groupIdx', e.target.value)}
          >
            {this.props.groupNames.map((option, idx) => (
              <MenuItem key={option} value={idx}>
                {option}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      </div>
      <Button
        variant="raised"
        color="primary"
        className={this.props.classes.btn}
        onClick={() => this.props.createLesson(
          this.props.groupNames[this.state.groupIdx],
          this.props.subjectCodes[this.state.subjectIdx],
          this.props.teachers[this.state.teacherIdx],
          this.props.timeslots[this.state.timeslotIdx]._id,
        )``}
      >
        Добави
      </Button>
    </div>
  );
}

Creator.propTypes = {
  createLesson: PropTypes.func.isRequired,
  groupNames: PropTypes.array.isRequired,
  subjectCodes: PropTypes.array.isRequired,
  timeslots: PropTypes.array.isRequired,
  teachers: PropTypes.array.isRequired,
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Creator);
