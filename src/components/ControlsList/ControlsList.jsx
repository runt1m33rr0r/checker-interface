import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import { List, ListItem, ListItemText, Divider } from '@material-ui/core';
import { Link } from 'react-router-dom';

import styles from './styles';

const Controls = ({
  classes, isAuthenticated, handleLogout, isRegistered, roles,
}) => (
  <div className={classes.root}>
    <List>
      <Link className={classes.link} to="/">
        <ListItem button>
          <ListItemText primary="Начало" />
        </ListItem>
      </Link>
      {isAuthenticated && (
        <ListItem button onClick={handleLogout}>
          <ListItemText primary="Изход" />
        </ListItem>
      )}
    </List>
    <Divider />
    {isAuthenticated ? (
      <List>
        <Link className={classes.link} to="/profile">
          <ListItem button>
            <ListItemText primary="Профил" />
          </ListItem>
        </Link>
        {roles.includes('Student') && (
          <Fragment>
            <Link className={classes.link} to="/check">
              <ListItem button>
                <ListItemText primary="Отбелязване на присъствие" />
              </ListItem>
            </Link>
          </Fragment>
        )}
        {roles.includes('Admin') && (
          <Fragment>
            <Link className={classes.link} to="/wizard">
              <ListItem button>
                <ListItemText primary="Начална настройка" />
              </ListItem>
            </Link>
            <Link className={classes.link} to="/register-teacher">
              <ListItem button>
                <ListItemText primary="Регистрация на учител/ка" />
              </ListItem>
            </Link>
            <Link className={classes.link} to="/creator">
              <ListItem button>
                <ListItemText primary="Създаване на програма" />
              </ListItem>
            </Link>
          </Fragment>
        )}
        <Link className={classes.link} to="/timetable">
          <ListItem button>
            <ListItemText primary="Седмична програма" />
          </ListItem>
        </Link>
        <Link className={classes.link} to="/absences">
          <ListItem button>
            <ListItemText primary="Отсъствия" />
          </ListItem>
        </Link>
        {/* {roles.includes('Teacher') && (
            <Link className={classes.link} to="/generator">
              <ListItem button>
                <ListItemText primary="Генератор на програма" />
              </ListItem>
            </Link>
          )} */}
      </List>
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
    <Divider />
    <List>
      <Link className={classes.link} to="/info">
        <ListItem button>
          <ListItemText primary="Информация" />
        </ListItem>
      </Link>
    </List>
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
