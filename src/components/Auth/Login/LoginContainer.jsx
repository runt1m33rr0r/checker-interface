import { connect } from 'react-redux';

import LoginForm from './LoginForm';
import { loginUser } from '../../../actions/auth-actions';
import titled from '../../common/TitledComponent';

const mapDispatchToProps = dispatch => ({
  handleSubmit: creds => dispatch(loginUser(creds)),
});

const mapStateToProps = ({ auth }) => ({
  isAuthenticated: auth.isAuthenticated,
});

export default connect(mapStateToProps, mapDispatchToProps)(titled(LoginForm, 'Вход'));
