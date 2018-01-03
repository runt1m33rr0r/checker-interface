import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import Group from './Group';
import * as WizardActions from '../../../actions/wizard-actions';

const mapDispatchToProps = (dispatch) => {
  const actions = bindActionCreators(WizardActions, dispatch);
  return {
    handleAddSubject: actions.addSubjectToGroup,
    handleRemoveSubject: actions.removeSubjectFromGroup,
  };
};

const mapStateToProps = ({ wizard }) => ({
  subjects: wizard.subjects,
});

export default connect(mapStateToProps, mapDispatchToProps)(Group);
