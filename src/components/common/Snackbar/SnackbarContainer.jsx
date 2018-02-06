import { connect } from 'react-redux';

import Snackbar from './Snackbar';
import { resetMessage } from '../../../actions/ui-actions';

const mapStateToProps = ({ ui }) => ({
  message: ui.message,
});

const mapDispatchToProps = dispatch => ({
  handleClose: () => dispatch(resetMessage()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Snackbar);
