import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import * as WizardActions from '../../../actions/wizard-actions';
import GroupList from './GroupList';

const mapStateToProps = ({ wizard }) => ({
  groups: wizard.groups,
  subjects: wizard.subjects,
});

const mapDispatchToProps = (dispatch) => {
  const actions = bindActionCreators(WizardActions, dispatch);
  return {
    handleAddSubject: actions.addSubjectToGroup,
    handleRemoveSubject: actions.removeSubjectFromGroup,
    generateGroups: actions.generateGroups,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(GroupList);
