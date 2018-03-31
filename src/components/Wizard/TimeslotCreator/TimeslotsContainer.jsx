import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import Creator from './Timeslots';
import * as WizardActions from '../../../actions/wizard.actions';

const mapDispatchToProps = (dispatch) => {
  const actions = bindActionCreators(WizardActions, dispatch);
  return {
    handleAdd: actions.addTimeslot,
    handleRemove: actions.removeTimeslot,
  };
};

const mapStateToProps = ({ wizard }) => ({
  timeslots: wizard.timeslots,
});

export default connect(mapStateToProps, mapDispatchToProps)(Creator);
