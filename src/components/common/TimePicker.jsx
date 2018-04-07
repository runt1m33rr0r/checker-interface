import React, { Component } from 'react';
import MuiPickersUtilsProvider from 'material-ui-pickers/utils/MuiPickersUtilsProvider';
import DateFnsUtils from 'material-ui-pickers/utils/date-fns-utils';
import PropTypes from 'prop-types';
import { TimePicker } from 'material-ui-pickers';
import { withStyles } from 'material-ui/styles';

const styles = () => ({
  timePicker: {
    maxWidth: '5em',
  },
});

class Picker extends Component {
  constructor(props) {
    super(props);

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(val) {
    if (val === null) {
      return this.props.handleChange(new Date(2000, 0, 0, 0, 0));
    }
    return this.props.handleChange(val);
  }

  render() {
    const {
      classes, label, hour, minute,
    } = this.props;

    return (
      <MuiPickersUtilsProvider utils={DateFnsUtils}>
        <TimePicker
          className={classes.timePicker}
          ampm={false}
          label={label}
          okLabel="Запиши"
          cancelLabel="Отказ"
          margin="dense"
          clearable
          clearLabel="Зачисти"
          value={new Date(2000, 0, 0, hour, minute)}
          onChange={this.handleChange}
        />
      </MuiPickersUtilsProvider>
    );
  }
}

Picker.propTypes = {
  classes: PropTypes.object.isRequired,
  label: PropTypes.string.isRequired,
  hour: PropTypes.number.isRequired,
  minute: PropTypes.number.isRequired,
  handleChange: PropTypes.func.isRequired,
};

export default withStyles(styles)(Picker);
