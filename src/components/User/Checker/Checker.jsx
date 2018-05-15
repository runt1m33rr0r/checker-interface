import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import { Button } from '@material-ui/core';
// import Typography from 'material-ui/Typography';

import styles from './styles';

class Checker extends Component {
  constructor(props) {
    super(props);

    this.canvas = {};
    this.video = {};

    this.state = {
      paused: false,
      image: '',
      // longitude: 0,
      // latitude: 0,
      // accuracy: 0
    };

    this.handleCaptureButton = this.handleCaptureButton.bind(this);
  }

  componentDidMount() {
    this.init();
    // this.calcLocation();
    // console.log(this.calcDistance(42.6123581, 23.0636016, 42.6122532, 23.0636185));
  }

  componentWillUnmount() {
    this.unload();
  }

  init() {
    navigator.mediaDevices
      .getUserMedia({ video: true })
      .then(stream => (this.video.srcObject = stream));
  }

  unload() {
    this.video.srcObject.getVideoTracks().forEach(track => track.stop());
  }

  capture() {
    const context = this.canvas.getContext('2d');
    context.drawImage(this.video, 0, 0, this.canvas.width, this.canvas.height);

    this.video.pause();
    this.setState({ paused: true, image: this.canvas.toDataURL() });
  }

  reset() {
    this.video.play();
    this.setState({ paused: false });
  }

  handleCaptureButton() {
    if (this.state.paused) {
      this.reset();
    } else {
      this.capture();
    }
  }

  // calcLocation = () => {
  //   const options = {
  //     enableHighAccuracy: true,
  //     timeout: 5000,
  //     maximumAge: 0,
  //   };

  //   navigator.geolocation.getCurrentPosition(
  //     (pos) => {
  //       console.log(pos.coords);
  //       this.setState({
  //         longitude: pos.coords.longitude,
  //         latitude: pos.coords.latitude,
  //         accuracy: pos.coords.accuracy,
  //       });
  //     },
  //     error => console.log('error', error.message),
  //     options,
  //   );
  // };

  // toRadians = degrees => degrees * (Math.PI / 180);

  // calcDistance = (firstLat, firstLon, secondLat, secondLon) => {
  //   const earthRadius = 6371;
  //   const degLat = this.toRadians(secondLat - firstLat);
  //   const degLon = this.toRadians(secondLon - firstLon);
  //   const radLat1 = this.toRadians(firstLat);
  //   const radLat2 = this.toRadians(secondLat);
  //   const a =
  //     Math.sin(degLat / 2) * Math.sin(degLat / 2) +
  //     Math.sin(degLon / 2) * Math.sin(degLon / 2) * Math.cos(radLat1) * Math.cos(radLat2);
  //   const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  //   return earthRadius * c * 1000;
  // };

  render() {
    const { classes } = this.props;
    return (
      <div className={classes.root}>
        {/* <Typography variant="body2">{`longitude: ${
          this.state.longitude
        }`}</Typography>
        <Typography variant="body2">{`latitude: ${
          this.state.latitude
        }`}</Typography>
        <Typography variant="body2">{`accuracy: ${
          this.state.accuracy
        }`}</Typography> */}
        <video width="100%" ref={vid => (this.video = vid)} autoPlay />
        <canvas className={classes.canvas} ref={canv => (this.canvas = canv)} />
        <div>
          <Button
            className={classes.button}
            variant="raised"
            color="primary"
            onClick={this.handleCaptureButton}
          >
            {this.state.paused ? 'Наново' : 'Снимай'}
          </Button>
          <Button
            disabled={this.state.image === ''}
            className={classes.button}
            variant="raised"
            color="primary"
            onClick={this.props.handleSend(this.state.image.split(',')[1])}
          >
            {'Изпрати'}
          </Button>
        </div>
      </div>
    );
  }
}

Checker.propTypes = {
  classes: PropTypes.object.isRequired,
  handleSend: PropTypes.func.isRequired,
};

export default withStyles(styles)(Checker);
