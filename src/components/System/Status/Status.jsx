import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import Typography from 'material-ui/Typography';
import List, { ListItem, ListItemText } from 'material-ui/List';

import styles from './styles';

const Status = ({
  classes,
  setupFinished,
  freeSubjects,
  teachersCount,
  studentsCount,
  groupsCount,
  subjectsCount,
}) => (
  <div className={classes.root}>
    <Typography variant="display1" gutterBottom>
      Системата е настроена: {setupFinished ? 'Да' : 'Не'}
    </Typography>
    <Typography variant="display1" gutterBottom>
      Брой на учители: {teachersCount}
    </Typography>
    <Typography variant="display1" gutterBottom>
      Брой на ученици: {studentsCount}
    </Typography>
    <Typography variant="display1" gutterBottom>
      Брой на класове: {groupsCount}
    </Typography>
    <Typography variant="display1" gutterBottom>
      Брой на предмети: {subjectsCount}
    </Typography>
    <Typography variant="display1" gutterBottom>
      Предмети без учители:
    </Typography>
    <List>
      {freeSubjects.map(subject => (
        <ListItem key={subject}>
          <ListItemText primary={subject} />
        </ListItem>
      ))}
    </List>
  </div>
);

Status.propTypes = {
  classes: PropTypes.object.isRequired,
  setupFinished: PropTypes.bool.isRequired,
  freeSubjects: PropTypes.array.isRequired,
  teachersCount: PropTypes.number.isRequired,
  studentsCount: PropTypes.number.isRequired,
  groupsCount: PropTypes.number.isRequired,
  subjectsCount: PropTypes.number.isRequired,
};

export default withStyles(styles)(Status);
