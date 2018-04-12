import { connect } from 'react-redux';

import Creator from './Timeslots';
import { addTimeslot, removeTimeslot } from '../../../actions/wizard.actions';

const mapDispatchToProps = dispatch => ({
  handleAdd: timeslot => () => dispatch(addTimeslot(timeslot)),
  handleRemove: timeslot => () => dispatch(removeTimeslot(timeslot)),
});

const mapStateToProps = ({ wizard }) => ({
  timeslots: wizard.timeslots,
});

export default connect(mapStateToProps, mapDispatchToProps)(Creator);
