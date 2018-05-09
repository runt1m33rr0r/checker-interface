import React from 'react';
import Typography from 'material-ui/Typography';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';

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
  a: {
    color: 'green',
  },
};

const InfoPage = ({ classes }) => (
  <div className={classes.root}>
    <Typography variant="title">
      Ако имате проблеми или въпроси относно приложението може да ми пишете по{' '}
      {
        <a className={classes.a} href="https://www.facebook.com/alexander.yankov1173">
          facebook messenger.
        </a>
      }
    </Typography>
  </div>
);

InfoPage.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(titled(InfoPage, 'Информация'));
