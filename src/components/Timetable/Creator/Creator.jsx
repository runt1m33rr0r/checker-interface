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

  /* eslint no-underscore-dangle: 0 */
  render = () => {
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
              <Table
                deleteHandler={lesson => this.props.deleteLesson(lesson)}
                key={name}
                groupName={name}
              />
            ))}
          </TabView>
        </div>
        <div className={createForm}>
          <FormControl>
            <InputLabel htmlFor="time">Време</InputLabel>
            <Select
              value={timeslotIdx}
              id="time"
              onChange={e => this.handleChange('timeslotIdx', e.target.value)}
            >
              {timeslots.map((option, idx) => (
                <MenuItem key={this.timeslotToString(option)} value={idx}>
                  {this.timeslotToString(option)}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
          <FormControl>
            <InputLabel htmlFor="subject">Предмет</InputLabel>
            <Select
              value={subjectIdx}
              id="subject"
              onChange={e => this.handleChange('subjectIdx', e.target.value)}
            >
              {subjectCodes.map((option, idx) => (
                <MenuItem key={option} value={idx}>
                  {option}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
          <FormControl>
            <InputLabel htmlFor="teacher">Учител/ка</InputLabel>
            <Select
              value={teacherIdx}
              id="teacher"
              onChange={e => this.handleChange('teacherIdx', e.target.value)}
            >
              {teachers.map((option, idx) => (
                <MenuItem key={option} value={idx}>
                  {option}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
          <FormControl>
            <InputLabel htmlFor="group">Клас</InputLabel>
            <Select
              value={groupIdx}
              id="group"
              onChange={e => this.handleChange('groupIdx', e.target.value)}
            >
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
            onClick={() =>
              createLesson(
                groupNames[groupIdx],
                subjectCodes[subjectIdx],
                teachers[teacherIdx],
                timeslots[timeslotIdx]._id,
              )
            }
          >
            Добави
          </Button>
        </div>
      </div>
    );
  };
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
