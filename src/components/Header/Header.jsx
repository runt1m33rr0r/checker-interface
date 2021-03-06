import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import {
  Drawer,
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  Hidden,
  Divider,
} from '@material-ui/core';
import { Menu, LightbulbOutline } from '@material-ui/icons';

import ControlsList from '../ControlsList';
import Loading from '../common/Loading';
import Snackbar from '../common/Snackbar';
import styles from './styles';

class Header extends Component {
  constructor(props) {
    super(props);

    this.state = {
      mobileOpen: false,
    };

    this.handleDrawerToggle = this.handleDrawerToggle.bind(this);
  }

  handleDrawerToggle() {
    this.setState({ mobileOpen: !this.state.mobileOpen });
  }

  render() {
    const {
      classes,
      theme,
      children,
      title,
      isAuthenticated,
      username,
      message,
      handleSnackbarClose,
    } = this.props;

    const drawer = (
      <div>
        <div className={classes.drawerHeader}>
          {isAuthenticated ? (
            <Typography variant="title" gutterBottom>
              {username}
            </Typography>
          ) : null}
        </div>
        <Divider />
        <ControlsList />
      </div>
    );

    return (
      <div className={classes.root}>
        <div className={classes.appFrame}>
          <AppBar className={classes.appBar}>
            <Toolbar>
              <IconButton
                color="inherit"
                aria-label="open drawer"
                onClick={this.handleDrawerToggle}
                className={classes.navIconHide}
              >
                <Menu />
              </IconButton>
              <Typography variant="title" color="inherit" noWrap className={classes.flex}>
                {title}
              </Typography>
              <div>
                <IconButton
                  className={this.props.dark === true ? classes.lampOff : classes.lampOn}
                  onClick={this.props.toggleDarkness}
                >
                  <LightbulbOutline />
                </IconButton>
              </div>
            </Toolbar>
          </AppBar>
          <Hidden mdUp>
            <Drawer
              variant="temporary"
              anchor={theme.direction === 'rtl' ? 'right' : 'left'}
              open={this.state.mobileOpen}
              classes={{
                paper: classes.drawerPaper,
              }}
              onClose={this.handleDrawerToggle}
              ModalProps={{
                keepMounted: true, // Better open performance on mobile.
              }}
            >
              <div
                tabIndex={0}
                role="button"
                onClick={this.handleDrawerToggle}
                onKeyDown={this.handleDrawerToggle}
              >
                {drawer}
              </div>
            </Drawer>
          </Hidden>
          <Hidden smDown implementation="css">
            <Drawer
              variant="permanent"
              open
              classes={{
                paper: classes.drawerPaper,
              }}
            >
              {drawer}
            </Drawer>
          </Hidden>
          <main className={classes.content}>
            <Loading isHidden={!this.props.isLoading} />
            <div className={this.props.isLoading ? classes.hidden : classes.children}>
              {children}
            </div>
            <Snackbar message={message} handleClose={handleSnackbarClose} />
          </main>
        </div>
      </div>
    );
  }
}

Header.propTypes = {
  classes: PropTypes.object.isRequired,
  theme: PropTypes.object.isRequired,
  title: PropTypes.string.isRequired,
  children: PropTypes.element.isRequired,
  isAuthenticated: PropTypes.bool.isRequired,
  username: PropTypes.string.isRequired,
  isLoading: PropTypes.bool.isRequired,
  message: PropTypes.string.isRequired,
  handleSnackbarClose: PropTypes.func.isRequired,
  toggleDarkness: PropTypes.func.isRequired,
  dark: PropTypes.bool.isRequired,
};

export default withStyles(styles, { withTheme: true })(Header);
