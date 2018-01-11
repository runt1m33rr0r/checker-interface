import { connect } from 'react-redux';

import Header from './Header';

const mapStateToProps = ({ auth }) => ({
  isAuthenticated: auth.isAuthenticated,
  username: auth.username,
});

export default connect(mapStateToProps)(Header);
