import { connect } from 'react-redux';

import Controls from './ControlsList';
import { logoutUser } from '../../actions/auth-actions';
import toJS from '../common/ToJS';

const mapDispatchToProps = dispatch => ({
  handleLogout: () => dispatch(logoutUser()),
});

const mapStateToProps = (state) => {
  const auth = state.get('auth');
  return {
    isAuthenticated: auth.get('isAuthenticated'),
    isRegistered: auth.get('isRegistered'),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(toJS(Controls));
