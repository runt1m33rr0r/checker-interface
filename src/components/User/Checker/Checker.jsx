import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import Button from 'material-ui/Button';

import styles from './styles';

class Checker extends Component {
  constructor(props) {
    super(props);

    this.canvas = {};
    this.video = {};

    this.state = {
      paused: false,
      image: '',
    };
  }

  componentDidMount = () => {
    this.init();
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

  render = () => {
    const { classes } = this.props;
    return (
      <div className={classes.root}>
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
            disabled={this.state.image === ''}
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
