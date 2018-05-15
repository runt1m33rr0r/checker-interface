import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import { List, ListItem, ListItemText, ListSubheader, Typography } from '@material-ui/core';

import styles from './styles';

const days = ['Понеделник', 'Вторник', 'Сряда', 'Четвъртък', 'Петък'];

/* eslint no-underscore-dangle: 0 */
const AbsencesViewer = ({ absences, classes }) => (
  <div className={classes.root}>
    {absences.length === 0 && <Typography variant="display3">Няма отсъствия!</Typography>}
    {absences.length > 0 && (
      <List
        className={classes.list}
        subheader={<ListSubheader component="div">Отсъствия: </ListSubheader>}
      >
        {absences.map(absence => (
          <ListItem key={absence._id} button>
            <ListItemText
              primary={`${days[absence.day - 1]} ${absence.subjectCode} при ${
                absence.teacherUsername
              } в ${absence.groupName}`}
            />
          </ListItem>
        ))}
      </List>
    )}
  </div>
);

AbsencesViewer.propTypes = {
  absences: PropTypes.array.isRequired,
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(AbsencesViewer);
