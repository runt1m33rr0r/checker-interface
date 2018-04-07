import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import Creator from './Timeslots';
import { addTimeslot, removeTimeslot } from '../../../actions/wizard.actions';

const mapDispatchToProps = dispatch =>
  bindActionCreators({ addTimeslot, removeTimeslot }, dispatch);

const mapStateToProps = ({ wizard }) => ({
  timeslots: wizard.timeslots,
});

export default connect(mapStateToProps, mapDispatchToProps)(Creator);
