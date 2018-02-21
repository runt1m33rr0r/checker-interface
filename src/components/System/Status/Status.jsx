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
    <div className={classes.content}>
      <Typography className={classes.text} variant="headline" gutterBottom>
        Системата е настроена: {setupFinished ? 'да' : 'не'}
      </Typography>
      <Typography className={classes.text} variant="headline" gutterBottom>
        Брой на учители: {teachersCount}
      </Typography>
      <Typography className={classes.text} variant="headline" gutterBottom>
        Брой на ученици: {studentsCount}
      </Typography>
      <Typography className={classes.text} variant="headline" gutterBottom>
        Брой на класове: {groupsCount}
      </Typography>
      <Typography className={classes.text} variant="headline" gutterBottom>
        Брой на предмети: {subjectsCount}
      </Typography>
      <Typography className={classes.text} variant="title" gutterBottom>
        Предмети без учители:
      </Typography>
    </div>
    <div>
      <List className={classes.list}>
        {freeSubjects.map(subject => (
          <ListItem button key={subject}>
            <ListItemText primary={subject} />
          </ListItem>
        ))}
      </List>
    </div>
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
