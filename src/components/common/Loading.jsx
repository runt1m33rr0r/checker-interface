import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import { CircularProgress } from 'material-ui/Progress';
import classNames from 'classnames';

const styles = {
  root: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    alignContent: 'center',
    width: '100%',
    height: '100%',
  },
  hidden: {
    display: 'none',
  },
};

const Loading = ({ classes, isHidden }) => (
  <div className={isHidden ? classNames(classes.root, classes.hidden) : classes.root}>
    <CircularProgress color="primary" size={200} thickness={6} />
  </div>
);

Loading.propTypes = {
  classes: PropTypes.object.isRequired,
  isHidden: PropTypes.bool.isRequired,
};

export default withStyles(styles)(Loading);
