import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import List, { ListItem, ListItemSecondaryAction, ListItemText } from 'material-ui/List';
import Switch from 'material-ui/Switch';

const styles = theme => ({
  root: {
    width: '100%',
    height: '100%',
    backgroundColor: theme.palette.background.paper,
  },
});

const Group = ({
  classes, groupName, subjects, handleAddSubject, handleRemoveSubject,
}) => (
  <div className={classes.root}>
    <List>
      {subjects.map(subject => (
        <ListItem key={subject}>
          <ListItemText primary={subject} />
          <ListItemSecondaryAction>
            <Switch
              onChange={(e) => {
                console.log(subject);
                console.log(groupName);
                // if (e.target.checked) {
                //   handleAddSubject(subject, groupName);
                // } else {
                //   handleRemoveSubject(subject, groupName);
                // }
              }}
            />
          </ListItemSecondaryAction>
        </ListItem>
      ))}
    </List>
  </div>
);

Group.propTypes = {
  classes: PropTypes.object.isRequired,
  groupName: PropTypes.string.isRequired,
  subjects: PropTypes.array.isRequired,
  handleAddSubject: PropTypes.func.isRequired,
  handleRemoveSubject: PropTypes.func.isRequired,
};

export default withStyles(styles)(Group);
