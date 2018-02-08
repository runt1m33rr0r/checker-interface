import { connect } from 'react-redux';

import Header from './Header';
import { resetMessage } from '../../actions/ui-actions';

const mapStateToProps = ({ auth, wizard, network }) => ({
  isAuthenticated: auth.isAuthenticated,
  isLoading: network.isFetching || wizard.isGenerating,
  username: auth.username,
  message: network.message,
});

const mapDispatchToProps = dispatch => ({
  handleSnackbarClose: () => dispatch(resetMessage()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Header);
