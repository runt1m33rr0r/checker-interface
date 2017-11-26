import React from 'react';
import Button from 'material-ui/Button';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';

const PrimaryButton = props => (
  <Button raised color="primary" className={props.classes.button}>
    {props.content}
  </Button>
);

PrimaryButton.propTypes = {
  classes: PropTypes.object.isRequired,
  content: PropTypes.string.isRequired,
};

export default withStyles()(PrimaryButton);
