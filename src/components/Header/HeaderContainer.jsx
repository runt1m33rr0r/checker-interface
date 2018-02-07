import { connect } from 'react-redux';

import Header from './Header';
import { resetMessage } from '../../actions/ui-actions';

const mapStateToProps = ({ auth, wizard, ui }) => ({
  isAuthenticated: auth.isAuthenticated,
  isLoading: auth.isFetching || wizard.isGenerating || wizard.isFetching,
  username: auth.username,
  message: ui.message,
});

const mapDispatchToProps = dispatch => ({
  handleSnackbarClose: () => dispatch(resetMessage()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Header);
