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
import TextField from 'material-ui/TextField';
import Typography from 'material-ui/Typography';

import titled from '../../common/TitledComponent';
import Camera from '../../common/Camera';
import { encodeStudent } from '../../../actions/student.actions';
import { fetchProfile, changePassword } from '../../../actions/auth.actions';
import styles from './styles';

class ProfilePage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      cameraOpen: false,
      password: '',
      passwordRepeat: '',
    };

    this.handleClose = this.handleClose.bind(this);
    this.handleOpen = this.handleOpen.bind(this);
    this.handleSend = this.handleSend.bind(this);
    this.handlePasswordSubmit = this.handlePasswordSubmit.bind(this);
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

  handleChange(name) {
    return event =>
      this.setState({
        [name]: event.target.value,
      });
  }

  handlePasswordSubmit(e) {
    e.preventDefault();

    if (this.isPasswordValid()) {
      this.props.changePassword(this.state.password);
      this.setState({ password: '', passwordRepeat: '' });
    }
  }

  isPasswordValid() {
    return this.state.password === this.state.passwordRepeat;
  }

  render() {
    const { classes, roles, fullScreen, profile } = this.props;

    return (
      <div className={classes.root}>
        <Typography variant="headline" className={classes.headline}>
          {`${profile.firstName} ${profile.lastName}`}
        </Typography>

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

        <form className={classes.form} onSubmit={this.handlePasswordSubmit}>
          <TextField
            required
            label="Нова парола"
            className={classes.textField}
            type="password"
            value={this.state.password}
            onChange={this.handleChange('password')}
          />
          <TextField
            required
            label="Потвърди паролата"
            className={classes.textField}
            type="password"
            error={this.isPasswordValid() === false}
            value={this.state.passwordRepeat}
            onChange={this.handleChange('passwordRepeat')}
          />
          <Button
            variant="raised"
            color="primary"
            type="submit"
            disabled={this.isPasswordValid() === false}
            className={classes.button}
          >
            Смени парола
          </Button>
        </form>
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
  changePassword: PropTypes.func.isRequired,
  profile: PropTypes.object.isRequired,
};

const mapStateToProps = ({ auth }) => ({
  roles: auth.roles,
  profile: auth.profile,
});

const mapDispatchToProps = dispatch => ({
  handleSend: image => dispatch(encodeStudent(image)),
  fetchProfile: () => dispatch(fetchProfile()),
  changePassword: password => dispatch(changePassword(password)),
});

const styled = withStyles(styles)(ProfilePage);
const titledComponent = titled(styled, 'Профил');
const withDialog = withMobileDialog()(titledComponent);
export default connect(mapStateToProps, mapDispatchToProps)(withDialog);
