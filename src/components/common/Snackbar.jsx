import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import { Snackbar, IconButton } from '@material-ui/core';
import { Close } from '@material-ui/icons';

const styles = theme => ({
  close: {
    width: theme.spacing.unit * 4,
    height: theme.spacing.unit * 4,
  },
});

class SnackbarComponent extends Component {
  constructor(props) {
    super(props);

    this.handleSnackbarClose = this.handleSnackbarClose.bind(this);
  }

  handleSnackbarClose(event, reason) {
    return reason === 'clickaway' ? null : this.props.handleClose();
  }

  render() {
    const { message, classes } = this.props;
    return (
      <div>
        <Snackbar
          anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'center',
          }}
          open={message !== undefined && message !== ''}
          onClose={this.handleSnackbarClose}
          message={<span>{message}</span>}
          action={[
            <IconButton
              key="close"
              color="inherit"
              className={classes.close}
              onClick={this.handleSnackbarClose}
            >
              <Close />
            </IconButton>,
          ]}
        />
      </div>
    );
  }
}

SnackbarComponent.propTypes = {
  classes: PropTypes.object.isRequired,
  handleClose: PropTypes.func.isRequired,
  message: PropTypes.string.isRequired,
};

export default withStyles(styles)(SnackbarComponent);
