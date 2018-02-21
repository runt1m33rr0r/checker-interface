import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import Typography from 'material-ui/Typography';

import styles from './styles';

const Status = ({ classes, setupFinished }) => (
  <div className={classes.root}>
    <Typography variant="display1" gutterBottom>
      Системата е настроена: {setupFinished ? 'Да' : 'Не'}
    </Typography>
    <Typography variant="display1" gutterBottom>
      Брой на учители: 0
    </Typography>
    <Typography variant="display1" gutterBottom>
      Брой на ученици: 0
    </Typography>
    <Typography variant="display1" gutterBottom>
      Брой на класове: 0
    </Typography>
    <Typography variant="display1" gutterBottom>
      Брой на предмети: 0
    </Typography>
    <Typography variant="display1" gutterBottom>
      Брой на предмети без учители: 0
    </Typography>
  </div>
);

Status.propTypes = {
  classes: PropTypes.object.isRequired,
  setupFinished: PropTypes.bool.isRequired,
};

export default withStyles(styles)(Status);
