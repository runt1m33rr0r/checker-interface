import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import { Button, Dialog, DialogActions, TextField } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';

const styles = () => ({
  textField: {
    maxWidth: '5em',
  },
});

class Picker extends Component {
  constructor(props) {
    super(props);

    this.state = {
      open: false,
      time: this.props.defaultTime,
    };

    this.handleDateChange = this.handleDateChange.bind(this);
    this.handleOkButton = this.handleOkButton.bind(this);
    this.handleCancelButton = this.handleCancelButton.bind(this);
    this.handleField = this.handleField.bind(this);
  }

  parseTime() {
    const hours = this.state.time.getHours();
    const minutes = this.state.time.getMinutes();
    const parsedHours = hours < 10 ? `0${hours}` : hours;
    const parsedMinutes = minutes < 10 ? `0${minutes}` : minutes;
    return `${parsedHours}:${parsedMinutes}`;
  }

  handleDateChange(val) {
    if (val === null) {
      this.setState({ time: this.props.defaultTime });
    } else {
      this.setState({ time: val });
    }
  }

  handleOkButton() {
    this.setState({ open: false });
    this.props.handleChange(this.state.time);
  }

  handleCancelButton() {
    this.setState({ open: false, time: this.props.defaultTime });
  }

  handleField() {
    this.setState({ open: true });
  }

  render() {
    return (
      <Fragment>
        <TextField
          className={this.props.classes.textField}
          label={this.props.label}
          onClick={this.handleField}
          value={this.parseTime()}
          margin="dense"
        />
        <Dialog maxWidth="xs" open={this.state.open}>
          {/* <TimePicker
            mode="24h"
            defaultValue={this.props.defaultTime}
            value={this.state.time}
            onChange={this.handleDateChange}
          /> */}
          <DialogActions>
            <Button onClick={this.handleCancelButton} color="primary">
              Отказ
            </Button>
            <Button onClick={this.handleOkButton} color="primary">
              Запиши
            </Button>
          </DialogActions>
        </Dialog>
      </Fragment>
    );
  }
}

Picker.defaultProps = {
  defaultTime: new Date(2000, 0, 0, 0, 0),
};

Picker.propTypes = {
  handleChange: PropTypes.func.isRequired,
  label: PropTypes.string.isRequired,
  defaultTime: PropTypes.object,
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Picker);
