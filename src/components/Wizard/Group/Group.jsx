import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import List, { ListItem, ListItemText } from '@material-ui/core/List';
import Checkbox from '@material-ui/core/Checkbox';

import styles from './styles';

const Group = ({
  classes, groupSubjects, groupName, subjects, handleChange,
}) => (
  <div className={classes.root}>
    <List>
      {subjects.map(subject => (
        <ListItem key={subject}>
          <Checkbox
            checked={groupSubjects.includes(subject)}
            onChange={handleChange(groupName, subject)}
          />
          <ListItemText primary={subject} />
        </ListItem>
      ))}
    </List>
  </div>
);

Group.propTypes = {
  classes: PropTypes.object.isRequired,
  subjects: PropTypes.array.isRequired,
  groupSubjects: PropTypes.array.isRequired,
  groupName: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
};

export default withStyles(styles)(Group);
