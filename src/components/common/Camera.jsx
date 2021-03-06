import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import { Button, Typography } from '@material-ui/core';

const styles = {
  root: {
    width: '100%',
    height: '100%',
    overflowY: 'auto',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    alignContent: 'center',
    textAlign: 'center',
  },
  controls: {
    marginTop: '1em',
    paddingBottom: '1em',
  },
  button: {
    marginRight: '5px',
  },
  input: {
    display: 'none',
  },
  video: {
    height: '100%',
    width: '100%',
  },
  hidden: {
    display: 'none',
  },
};

class Checker extends Component {
  constructor(props) {
    super(props);

    this.canvas = {};
    this.video = {};

    this.state = {
      paused: false,
      image: '',
      hasCamera: false,
      width: 0,
      height: 0,
    };

    this.handleCaptureButton = this.handleCaptureButton.bind(this);
    this.handleSend = this.handleSend.bind(this);
  }

  componentDidMount() {
    this.init();
  }

  componentWillUnmount() {
    this.unload();
  }

  calculateCameraSize(stream) {
    const settings = stream.getVideoTracks()[0].getSettings();
    const { width, height } = settings;

    this.canvas.setAttribute('width', width);
    this.canvas.setAttribute('height', height);

    this.setState({ width, height });
  }

  init() {
    navigator.mediaDevices.getUserMedia({ video: true, audio: false }).then((stream) => {
      this.video.srcObject = stream;

      window.onresize = () => {
        this.calculateCameraSize(stream);
      };
      this.calculateCameraSize(stream);

      this.setState({ hasCamera: true });
    });
  }

  unload() {
    if (this.video.srcObject) {
      this.video.srcObject.getVideoTracks().forEach(track => track.stop());
    }
  }

  capture() {
    this.video.pause();

    const context = this.canvas.getContext('2d');
    context.drawImage(this.video, 0, 0, this.state.width, this.state.height);

    this.setState({ paused: true, image: this.canvas.toDataURL('image/jpeg') });
  }

  reset() {
    this.video.play();
    this.setState({ paused: false, image: '' });
  }

  handleCaptureButton() {
    if (this.state.paused) {
      this.reset();
    } else {
      this.capture();
    }
  }

  handleSend() {
    this.props.handleSend(this.state.image.split(',')[1]);
  }

  render() {
    const { classes } = this.props;
    return (
      <div className={classes.root}>
        <div>
          <video
            className={!this.state.hasCamera ? classes.hidden : classes.video}
            ref={vid => (this.video = vid)}
            autoPlay
            webkit-playsinline="true"
            playsInline="true"
          />
          <canvas className={classes.hidden} ref={canv => (this.canvas = canv)} />
        </div>

        {this.state.hasCamera === true && (
          <div className={classes.controls}>
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
              onClick={this.handleSend}
            >
              {'Изпрати'}
            </Button>
          </div>
        )}

        {this.state.hasCamera === false && (
          <Typography variant="display3">Няма достъп до камера!</Typography>
        )}
      </div>
    );
  }
}

Checker.propTypes = {
  classes: PropTypes.object.isRequired,
  handleSend: PropTypes.func.isRequired,
};

export default withStyles(styles)(Checker);
