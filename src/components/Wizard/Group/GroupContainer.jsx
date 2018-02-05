import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import * as WizardActions from '../../../actions/wizard-actions';
import Group from './Group';

const mapStateToProps = ({ wizard }) => ({
  subjects: wizard.subjects,
  groups: wizard.groups,
});

const mapDispatchToProps = (dispatch) => {
  const actions = bindActionCreators(WizardActions, dispatch);
  return {
    handleAddSubject: actions.addSubjectToGroup,
    handleRemoveSubject: actions.removeSubjectFromGroup,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Group);
