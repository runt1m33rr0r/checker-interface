import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import List, { ListItem, ListItemText } from 'material-ui/List';
import ListSubheader from 'material-ui/List/ListSubheader';

import styles from './styles';

const days = ['Понеделник', 'Вторник', 'Сряда', 'Четвъртък', 'Петък'];

const AbsencesViewer = ({ absences, classes }) => (
  <div className={classes.root}>
    <List
      className={classes.list}
      subheader={<ListSubheader component="div">Отсъствия: </ListSubheader>}
    >
      {absences.map(absence => (
        <ListItem key={`${absence.subject}${absence.day}${absence.hour}${absence.minute}`} button>
          <ListItemText inset primary={`${days[absence.day]} ${absence.subject}`} />
        </ListItem>
      ))}
    </List>
  </div>
);

AbsencesViewer.propTypes = {
  absences: PropTypes.array.isRequired,
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(AbsencesViewer);
