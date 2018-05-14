import React from 'react';
import Typography from '@material-ui/core/Typography';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';

import titled from '../common/TitledComponent';

const styles = {
  root: {
    width: '100%',
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    alignContent: 'center',
    textAlign: 'center',
  },
};

const HomePage = ({ classes }) => (
  <div className={classes.root}>
    <Typography variant="title">Засега няма нищо интересно тук!</Typography>
  </div>
);

HomePage.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(titled(HomePage, 'Начална страница'));
