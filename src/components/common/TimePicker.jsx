import React from 'react';
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

const Picker = ({
  classes, label, hour, minute, handleChange,
}) => (
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
      onChange={(val) => {
        if (val === null) {
          return handleChange(new Date(2000, 0, 0, 0, 0));
        }
        return handleChange(val);
      }}
    />
  </MuiPickersUtilsProvider>
);

Picker.propTypes = {
  classes: PropTypes.object.isRequired,
  label: PropTypes.string.isRequired,
  hour: PropTypes.number.isRequired,
  minute: PropTypes.number.isRequired,
  handleChange: PropTypes.func.isRequired,
};

export default withStyles(styles)(Picker);
