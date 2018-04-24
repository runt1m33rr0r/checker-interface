import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import Button from 'material-ui/Button';
import { connect } from 'react-redux';
import Dialog, {
  DialogContent,
  DialogTitle,
  DialogActions,
  withMobileDialog,
} from 'material-ui/Dialog';

import titled from '../../common/TitledComponent';
import Camera from '../../common/Camera';
import { encodeStudent } from '../../../actions/student.actions';
import { fetchProfile } from '../../../actions/auth.actions';

const styles = {
  root: {
    width: '100%',
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    alignContent: 'center',
  },
  title: {
    textAlign: 'center',
  },
  actions: {
    display: 'flex',
    justifyContent: 'center',
  },
};

class ProfilePage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      cameraOpen: false,
    };

    this.handleClose = this.handleClose.bind(this);
    this.handleOpen = this.handleOpen.bind(this);
    this.handleSend = this.handleSend.bind(this);
  }

  componentDidMount() {
    this.props.fetchProfile();
  }

  handleOpen() {
    this.setState({ cameraOpen: true });
  }

  handleClose() {
    this.setState({ cameraOpen: false });
  }

  handleSend(image) {
    this.handleClose();
    this.props.handleSend(image);
  }

  render() {
    const { classes, roles, fullScreen } = this.props;

    return (
      <div className={classes.root}>
        {roles.includes('Student') && (
          <Fragment>
            <Button variant="raised" color="primary" onClick={this.handleOpen}>
              {'Задай снимка'}
            </Button>

            <Dialog fullScreen={fullScreen} open={this.state.cameraOpen} onClose={this.handleClose}>
              <DialogTitle className={classes.title}>Задаване на личност</DialogTitle>
              <DialogContent>
                <Camera handleSend={this.handleSend} />
              </DialogContent>
              <DialogActions className={classes.actions}>
                <Button onClick={this.handleClose} color="primary" variant="raised">
                  Затвори
                </Button>
              </DialogActions>
            </Dialog>
          </Fragment>
        )}
      </div>
    );
  }
}

ProfilePage.propTypes = {
  roles: PropTypes.array.isRequired,
  classes: PropTypes.object.isRequired,
  fullScreen: PropTypes.bool.isRequired,
  fetchProfile: PropTypes.func.isRequired,
  handleSend: PropTypes.func.isRequired,
};

const mapStateToProps = ({ auth }) => ({
  roles: auth.roles,
});

const mapDispatchToProps = dispatch => ({
  handleSend: image => dispatch(encodeStudent(image)),
  fetchProfile: () => dispatch(fetchProfile()),
});

const styled = withStyles(styles)(ProfilePage);
const titledComponent = titled(styled, 'Профил');
const withDialog = withMobileDialog()(titledComponent);
export default connect(mapStateToProps, mapDispatchToProps)(withDialog);
