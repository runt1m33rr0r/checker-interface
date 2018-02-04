import { connect } from 'react-redux';

import Header from './Header';

const mapStateToProps = ({ auth, wizard }) => ({
  isAuthenticated: auth.isAuthenticated,
  isLoading: auth.isFetching || wizard.isGenerating,
  username: auth.username,
});

export default connect(mapStateToProps)(Header);
