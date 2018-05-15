import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import { MenuItem, Select, FormControl, InputLabel, Button } from '@material-ui/core';

import TabView from '../../common/TabView';
import Table from '../Table';

import styles from './styles';

class Creator extends Component {
  static timeslotToString(timeslot) {
    const days = ['Понеделник', 'Вторник', 'Сряда', 'Четвъртък', 'Петък'];
    const day = days[timeslot.day - 1];
    const fromHour = timeslot.fromHour > 9 ? timeslot.fromHour : `0${timeslot.fromHour}`;
    const fromMinute = timeslot.fromMinute > 9 ? timeslot.fromMinute : `0${timeslot.fromMinute}`;
    const toHour = timeslot.toHour > 9 ? timeslot.toHour : `0${timeslot.toHour}`;
    const toMinute = timeslot.toMinute > 9 ? timeslot.toMinute : `0${timeslot.toMinute}`;

    return `${day} от ${fromHour}:${fromMinute} до ${toHour}:${toMinute}`;
  }

  constructor(props) {
    super(props);

    this.state = {
      timeslotIdx: 0,
      subjectIdx: 0,
      teacherIdx: 0,
      groupIdx: 0,
    };
  }

  handleChange(valueName) {
    return e => this.setState({ [valueName]: e.target.value });
  }

  /* eslint no-underscore-dangle: 0 */
  render() {
    const { root, createForm, btn } = this.props.classes;
    const {
      groupNames, timeslots, subjectCodes, teachers, createLesson,
    } = this.props;
    const {
      timeslotIdx, subjectIdx, teacherIdx, groupIdx,
    } = this.state;

    return (
      <div className={root}>
        <div>
          <TabView tabNames={groupNames}>
            {groupNames.map(name => (
              <Table deleteHandler={this.props.deleteLesson} key={name} groupName={name} />
            ))}
          </TabView>
        </div>
        <div className={createForm}>
          <FormControl>
            <InputLabel htmlFor="time">Време</InputLabel>
            <Select value={timeslotIdx} id="time" onChange={this.handleChange('timeslotIdx')}>
              {timeslots.map((option, idx) => (
                <MenuItem key={Creator.timeslotToString(option)} value={idx}>
                  {Creator.timeslotToString(option)}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
          <FormControl>
            <InputLabel htmlFor="subject">Предмет</InputLabel>
            <Select value={subjectIdx} id="subject" onChange={this.handleChange('subjectIdx')}>
              {subjectCodes.map((option, idx) => (
                <MenuItem key={option} value={idx}>
                  {option}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
          <FormControl>
            <InputLabel htmlFor="teacher">Учител/ка</InputLabel>
            <Select value={teacherIdx} id="teacher" onChange={this.handleChange('teacherIdx')}>
              {teachers.map((option, idx) => (
                <MenuItem key={option} value={idx}>
                  {option}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
          <FormControl>
            <InputLabel htmlFor="group">Клас</InputLabel>
            <Select value={groupIdx} id="group" onChange={this.handleChange('groupIdx')}>
              {groupNames.map((option, idx) => (
                <MenuItem key={option} value={idx}>
                  {option}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
          <Button
            variant="raised"
            color="primary"
            className={btn}
            onClick={createLesson(
              groupNames[groupIdx],
              subjectCodes[subjectIdx],
              teachers[teacherIdx],
              timeslots[timeslotIdx] ? timeslots[timeslotIdx]._id : '',
            )}
          >
            Добави
          </Button>
        </div>
      </div>
    );
  }
}

Creator.propTypes = {
  createLesson: PropTypes.func.isRequired,
  deleteLesson: PropTypes.func.isRequired,
  groupNames: PropTypes.array.isRequired,
  subjectCodes: PropTypes.array.isRequired,
  timeslots: PropTypes.array.isRequired,
  teachers: PropTypes.array.isRequired,
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Creator);
