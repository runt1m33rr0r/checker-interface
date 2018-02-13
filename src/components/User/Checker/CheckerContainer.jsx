import { connect } from 'react-redux';

import Checker from './Checker';
import { sendImage } from '../../../actions/student-actions';

const mapDispatchToProps = dispatch => ({
  handleSend: image => dispatch(sendImage(image)),
});

export default connect(null, mapDispatchToProps)(Checker);
