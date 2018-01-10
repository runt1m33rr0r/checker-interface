import { connect } from 'react-redux';

import Header from './Header';
import toJS from '../common/ToJS';

const mapStateToProps = (reducers) => {
  const auth = reducers.get('auth');
  return {
    isAuthenticated: auth.get('isAuthenticated'),
    username: auth.get('username'),
  };
};

export default connect(mapStateToProps)(toJS(Header));
