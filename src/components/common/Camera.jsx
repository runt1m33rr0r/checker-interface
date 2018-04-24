import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import Button from 'material-ui/Button';
import Typography from 'material-ui/Typography';

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
  },
  button: {
    marginRight: '5px',
  },
  input: {
    display: 'none',
  },
  canvas: {
    display: 'none',
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

  init() {
    navigator.mediaDevices.getUserMedia({ video: true }).then((stream) => {
      this.video.srcObject = stream;
      this.setState({ hasCamera: true });
    });
  }

  unload() {
    if (this.video.srcObject) {
      this.video.srcObject.getVideoTracks().forEach(track => track.stop());
    }
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

  handleSend() {
    this.props.handleSend(this.state.image.split(',')[1]);
  }

  render() {
    const { classes } = this.props;
    return (
      <div className={classes.root}>
        <video
          className={!this.state.hasCamera ? classes.hidden : null}
          width="100%"
          ref={vid => (this.video = vid)}
          autoPlay
        />
        <canvas
          className={!this.state.hasCamera ? classes.hidden : classes.canvas}
          ref={canv => (this.canvas = canv)}
        />

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
              disabled={this.state.image === '' || this.state.accuracy > 16}
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
          <Typography variant="display3">Няма достъп камера!</Typography>
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
