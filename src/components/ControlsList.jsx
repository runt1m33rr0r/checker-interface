import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import List, { ListItem, ListItemText } from 'material-ui/List';
import Divider from 'material-ui/Divider';
import { Link } from 'react-router-dom';

const styles = theme => ({
  root: {
    width: '100%',
    maxWidth: 360,
    background: theme.palette.background.paper,
  },
  link: {
    textDecoration: 'none',
  },
});

function SimpleList(props) {
  const { classes, isAuthenticated, handleLogout } = props;

  return (
    <div className={classes.root}>
      {isAuthenticated ? (
        <List>
          <ListItem button onClick={() => handleLogout}>
            <ListItemText primary="Изход" />
          </ListItem>
        </List>
      ) : (
        <List>
          <Link className={classes.link} to="/login">
            <ListItem button>
              <ListItemText primary="Вход" />
            </ListItem>
          </Link>
          <Link className={classes.link} to="/register">
            <ListItem button>
              <ListItemText primary="Регистрация" />
            </ListItem>
          </Link>
        </List>
      )}
      <Divider />
      <List>
        <Link className={classes.link} to="/wizard">
          <ListItem button>
            <ListItemText primary="Wizard" />
          </ListItem>
        </Link>
      </List>
    </div>
  );
}

SimpleList.propTypes = {
  classes: PropTypes.object.isRequired,
  isAuthenticated: PropTypes.bool.isRequired,
  handleLogout: PropTypes.func.isRequired,
};

export default withStyles(styles)(SimpleList);
