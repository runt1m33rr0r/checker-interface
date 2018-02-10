import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import List, { ListItem, ListItemText } from 'material-ui/List';
import Checkbox from 'material-ui/Checkbox';

import styles from './styles';

const Group = ({
  classes, groupName, groups, subjects, handleAddSubject, handleRemoveSubject,
}) => {
  const check = (name, subject) => groups[name].includes(subject);
  return (
    <div className={classes.root}>
      <List>
        {subjects.map(subject => (
          <ListItem key={subject}>
            <Checkbox
              checked={check(groupName, subject)}
              onChange={(e) => {
                if (e.target.checked) {
                  handleAddSubject(groupName, subject);
                } else {
                  handleRemoveSubject(groupName, subject);
                }
              }}
            />
            <ListItemText primary={subject} />
          </ListItem>
        ))}
      </List>
    </div>
  );
};

Group.propTypes = {
  classes: PropTypes.object.isRequired,
  groupName: PropTypes.string.isRequired,
  subjects: PropTypes.array.isRequired,
  groups: PropTypes.object.isRequired,
  handleAddSubject: PropTypes.func.isRequired,
  handleRemoveSubject: PropTypes.func.isRequired,
};

export default withStyles(styles)(Group);
