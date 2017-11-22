import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import IconButton from 'material-ui/IconButton';
import PhotoCamera from 'material-ui-icons/PhotoCamera';

const styles = theme => ({
  button: {
    margin: theme.spacing.unit,
  },
  input: {
    display: 'none',
  },
});

function IconButtons(props) {
  const { classes } = props;

  const readFile = (ev) => {
    console.log(ev.target.files[0]);
  };

  return (
    <div>
      <input
        accept="image/*"
        capture="camera"
        className={classes.input}
        id="camera-input"
        type="file"
        onChange={(event) => {
          readFile(event);
        }}
        onClick={(event) => {
          event.target.value = null;
        }}
      />
      <label htmlFor="camera-input">
        <IconButton color="primary" className={classes.button} component="span">
          <PhotoCamera />
        </IconButton>
      </label>
    </div>
  );
}

IconButtons.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(IconButtons);
