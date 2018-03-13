import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import Button from 'material-ui/Button';
import Typography from 'material-ui/Typography';

import styles from './styles';

class Checker extends Component {
  constructor(props) {
    super(props);

    this.canvas = {};
    this.video = {};

    this.state = {
      paused: false,
      image: '',
      longitude: 0,
      latitude: 0,
      accuracy: 0,
      altitude: 0,
      altitudeAccuracy: 0,
    };
  }

  componentDidMount = () => {
    this.init();
    this.calcLocation();
  };

  componentWillUnmount = () => {
    this.unload();
  };

  init = () => {
    navigator.mediaDevices.getUserMedia({ video: true }).then((stream) => {
      this.video.srcObject = stream;
    });
  };

  unload = () => {
    this.video.srcObject.getVideoTracks().forEach(track => track.stop());
  };

  capture = () => {
    const context = this.canvas.getContext('2d');
    context.drawImage(this.video, 0, 0, this.canvas.width, this.canvas.height);

    this.video.pause();
    this.setState({ paused: true, image: this.canvas.toDataURL() });
  };

  reset = () => {
    this.video.play();
    this.setState({ paused: false });
  };

  calcLocation = () => {
    const options = {
      enableHighAccuracy: true,
      timeout: 5000,
      maximumAge: 0,
    };

    navigator.geolocation.getCurrentPosition(
      (pos) => {
        console.log(pos.coords);
        this.setState({
          longitude: pos.coords.longitude,
          latitude: pos.coords.latitude,
          accuracy: pos.coords.accuracy,
          altitude: pos.coords.altitude,
          altitudeAccuracy: pos.coords.altitudeAccuracy,
        });
      },
      error => console.log('error', error.message),
      options,
    );
  };

  render = () => {
    const { classes } = this.props;
    return (
      <div className={classes.root}>
        <Typography variant="body2">{`longitude: ${this.state.longitude}`}</Typography>
        <Typography variant="body2">{`latitude: ${this.state.latitude}`}</Typography>
        <Typography variant="body2">{`accuracy: ${this.state.accuracy}`}</Typography>
        <Typography variant="body2">{`altitude: ${this.state.altitude}`}</Typography>
        <Typography variant="body2">
          {`altitudeAccuracy: ${this.state.altitudeAccuracy}`}
        </Typography>
        <video width="100%" ref={vid => (this.video = vid)} autoPlay />
        <canvas className={classes.canvas} ref={canv => (this.canvas = canv)} />
        <div>
          <Button
            className={classes.button}
            variant="raised"
            color="primary"
            onClick={() => (this.state.paused ? this.reset() : this.capture())}
          >
            {this.state.paused ? 'Наново' : 'Снимай'}
          </Button>
          <Button
            disabled={this.state.image === '' || this.state.accuracy < 80 || this.state.altitudeAccuracy < 80}
            className={classes.button}
            variant="raised"
            color="primary"
            onClick={() => this.props.handleSend(this.state.image.split(',')[1])}
          >
            {'Изпрати'}
          </Button>
        </div>
      </div>
    );
  };
}

Checker.propTypes = {
  classes: PropTypes.object.isRequired,
  handleSend: PropTypes.func.isRequired,
};

export default withStyles(styles)(Checker);
