import React from 'react';
import Typography from 'material-ui/Typography';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import Button from 'material-ui/Button';

import titled from './common/TitledComponent';

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

const InfoPage = ({ classes }) => (
  <div className={classes.root}>
    <Typography variant="title" noWrap>
      При проблеми може да ми пишете по
    </Typography>
    {<Button href="http://www.google.com">facebook messenger</Button>}
    <Typography variant="title" noWrap>
      или
    </Typography>
    {<Button href="http://www.google.com">twitter</Button>}
  </div>
);

InfoPage.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(titled(InfoPage, 'Информация'));
