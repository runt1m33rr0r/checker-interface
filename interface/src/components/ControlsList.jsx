import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import List, { ListItem, ListItemText } from 'material-ui/List';
import Divider from 'material-ui/Divider';
import { NavLink } from 'react-router-dom';

const styles = theme => ({
  root: {
    width: '100%',
    maxWidth: 360,
    background: theme.palette.background.paper,
  },
});

function SimpleList(props) {
  const { classes } = props;
  return (
    <div className={classes.root}>
      <List>
        <NavLink to="/login">
          <ListItem button>
            <ListItemText primary="Вход" />
          </ListItem>
        </NavLink>
        <ListItem button>
          <ListItemText primary="Регистрация" />
        </ListItem>
      </List>
      <Divider />
      <List>
        <NavLink to="/wizard">
          <ListItem button>
            <ListItemText primary="Wizard" />
          </ListItem>
        </NavLink>
      </List>
    </div>
  );
}

SimpleList.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(SimpleList);
