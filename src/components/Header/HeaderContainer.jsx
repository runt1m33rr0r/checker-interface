import { connect } from 'react-redux';

import Header from './Header';
import { resetMessage, toggleDarkness } from '../../actions/ui-actions';

const mapStateToProps = ({
  auth, wizard, network, ui,
}) => ({
  isAuthenticated: auth.isAuthenticated,
  isLoading: network.isFetching || wizard.isGenerating,
  username: auth.username,
  message: network.message,
  dark: ui.dark,
});

const mapDispatchToProps = dispatch => ({
  handleSnackbarClose: () => dispatch(resetMessage()),
  toggleDarkness: () => dispatch(toggleDarkness()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Header);
