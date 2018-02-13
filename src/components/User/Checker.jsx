import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
// import IconButton from 'material-ui/IconButton';
// import PhotoCamera from 'material-ui-icons/PhotoCamera';
// import Input, { InputLabel } from 'material-ui/Input';

const styles = {
  input: {
    display: 'none',
  },
};

class Checker extends Component {
  constructor(props) {
    super(props);

    this.canvas = {};
    this.context = {};
    this.video = {};
    this.width = 300;
    this.height = 300;
  }

  init = (vid) => {
    this.video = vid;

    const constraints = {
      video: true,
    };
    navigator.mediaDevices.getUserMedia(constraints).then((stream) => {
      this.video.srcObject = stream;
      console.log(this.video.videoHeight);
    });
  };

  capture = () => {
    this.context.drawImage(this.video, 0, 0, this.canvas.width, this.canvas.height);
  };

  render = () => (
    <div>
      <video width={this.width} ref={vid => this.init(vid)} autoPlay />
      <button onClick={this.capture}>Capture</button>
      <canvas
        ref={(canv) => {
          this.canvas = canv;
          this.context = canv.getContext('2d');
        }}
        id="canvas"
        width={this.width}
        height={this.height}
      />
    </div>
    // <div>
    //   <InputLabel htmlFor="camera-input">
    //     <IconButton color="primary" className={classes.button} component="span">
    //       <PhotoCamera />
    //     </IconButton>
    //   </InputLabel>
    //   <Input
    //     accept="image/*"
    //     capture
    //     className={classes.input}
    //     id="camera-input"
    //     type="file"
    //     onChange={(event) => {
    //       readFile(event);
    //     }}
    //     onClick={(event) => {
    //       event.target.value = null;
    //     }}
    //   />
    // </div>
  );
}

Checker.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Checker);
