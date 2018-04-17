import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import List, { ListItem, ListItemText } from 'material-ui/List';
import Divider from 'material-ui/Divider';
import { Link } from 'react-router-dom';

import styles from './styles';

const Controls = ({
  classes, isAuthenticated, handleLogout, isRegistered, roles,
}) => (
  <div className={classes.root}>
    {isAuthenticated ? (
      <div>
        <List>
          <ListItem button onClick={handleLogout}>
            <ListItemText primary="Изход" />
          </ListItem>
        </List>
        <Divider />
        <List>
          <Link className={classes.link} to="/wizard">
            <ListItem button>
              <ListItemText primary="Начална настройка" />
            </ListItem>
          </Link>
          <Link className={classes.link} to="/timetable">
            <ListItem button>
              <ListItemText primary="Седмична програма" />
            </ListItem>
          </Link>
          {roles.includes('Student') && (
            <Link className={classes.link} to="/check">
              <ListItem button>
                <ListItemText primary="Отбелязване на присъствие" />
              </ListItem>
            </Link>
          )}
          {/* {roles.includes('Teacher') && (
            <Link className={classes.link} to="/generator">
              <ListItem button>
                <ListItemText primary="Генератор на програма" />
              </ListItem>
            </Link>
          )} */}
          {roles.includes('Teacher') && (
            <Link className={classes.link} to="/creator">
              <ListItem button>
                <ListItemText primary="Създаване на програма" />
              </ListItem>
            </Link>
          )}
        </List>
      </div>
    ) : (
      <List>
        <Link className={classes.link} to="/login">
          <ListItem button>
            <ListItemText primary="Вход" />
          </ListItem>
        </Link>
        {!isRegistered ? (
          <Link className={classes.link} to="/register">
            <ListItem button>
              <ListItemText primary="Регистрация" />
            </ListItem>
          </Link>
        ) : null}
      </List>
    )}
  </div>
);

Controls.propTypes = {
  classes: PropTypes.object.isRequired,
  isAuthenticated: PropTypes.bool.isRequired,
  isRegistered: PropTypes.bool.isRequired,
  handleLogout: PropTypes.func.isRequired,
  roles: PropTypes.array.isRequired,
};

export default withStyles(styles)(Controls);
