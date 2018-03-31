import { connect } from 'react-redux';

import Controls from './ControlsList';
import { logoutUser } from '../../actions/auth.actions';

const mapDispatchToProps = dispatch => ({
  handleLogout: () => dispatch(logoutUser()),
});

const mapStateToProps = ({ auth }) => ({
  isAuthenticated: auth.isAuthenticated,
  isRegistered: auth.isRegistered,
  roles: auth.roles,
});

export default connect(mapStateToProps, mapDispatchToProps)(Controls);
