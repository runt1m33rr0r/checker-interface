import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import Creator from './Timeslots';
import * as WizardActions from '../../../actions/wizard-actions';
import toJS from '../../common/ToJS';

const mapDispatchToProps = (dispatch) => {
  const actions = bindActionCreators(WizardActions, dispatch);
  return {
    handleAdd: actions.addTimeslot,
    handleRemove: actions.removeTimeslot,
  };
};

const mapStateToProps = state => ({
  timeslots: state.get('wizard').get('timeslots'),
});

export default connect(mapStateToProps, mapDispatchToProps)(toJS(Creator));
