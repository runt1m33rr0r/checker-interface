import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Table, { TableBody, TableCell, TableHead, TableRow } from 'material-ui/Table';
import Paper from 'material-ui/Paper';
import { withStyles } from 'material-ui/styles';
import Chip from 'material-ui/Chip';

import styles from './styles';

class TableComponent extends Component {
  static getHeadCells() {
    return [1, 2, 3, 4, 5, 6, 7, 8, 9].map(num => <TableCell key={num}>{num}</TableCell>);
  }

  _getRows() {
    return ['Понеделник', 'Вторник', 'Сряда', 'Четвъртък', 'Петък'].map((day, idx) => (
      <TableRow key={day}>
        <TableCell>{day}</TableCell>
        {this._getLessonsByDay(idx + 1)}
      </TableRow>
    ));
  }

  _getLessonByTimeslot(timeslot) {
    return this.props.lessons.find(el =>
      el.timeslot.fromHour === timeslot.fromHour &&
        el.timeslot.fromMinute === timeslot.fromMinute &&
        el.timeslot.toHour === timeslot.toHour &&
        el.timeslot.toMinute === timeslot.toMinute &&
        el.timeslot.day === timeslot.day);
  }

  _getLessonsByDay(day) {
    const timeslots = this.props.timeslots.filter(timeslot => timeslot.day === day);
    return timeslots.map((timeslot) => {
      const lesson = this._getLessonByTimeslot(timeslot);
      if (lesson) {
        return (
          <TableCell key={timeslot._id}>
            {typeof this.props.deleteHandler === 'function' ? (
              <Chip
                label={
                  <div>
                    <div>{lesson.subjectCode}</div>
                    <div>{lesson.teacherUsername}</div>
                  </div>
                }
                onDelete={this.props.deleteHandler(lesson)}
              />
            ) : (
              <div>
                <div>{lesson.subjectCode}</div>
                <div>{lesson.teacherUsername}</div>
                {this.props.showGroups && <div>{lesson.groupName}</div>}
              </div>
            )}
          </TableCell>
        );
      } else {
        return <TableCell key={timeslot._id} />;
      }
    });
  }

  render() {
    const { classes } = this.props;
    return (
      <Paper className={classes.root}>
        <Table className={classes.table}>
          <TableHead>
            <TableRow className={classes.overflowing}>
              <TableCell>Ден</TableCell>
              {TableComponent.getHeadCells()}
            </TableRow>
          </TableHead>
          <TableBody>{this._getRows()}</TableBody>
        </Table>
      </Paper>
    );
  }
}

TableComponent.propTypes = {
  lessons: PropTypes.array.isRequired,
  timeslots: PropTypes.array.isRequired,
  classes: PropTypes.object.isRequired,
  showGroups: PropTypes.bool,
  deleteHandler: PropTypes.func,
};

export default withStyles(styles)(TableComponent);
