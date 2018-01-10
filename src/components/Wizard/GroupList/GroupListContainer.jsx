import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import * as WizardActions from '../../../actions/wizard-actions';
import GroupList from './GroupList';
import toJS from '../../common/ToJS';

const mapStateToProps = (state) => {
  const wizard = state.get('wizard');
  return {
    groups: wizard.get('groups'),
    subjects: wizard.get('subjects'),
    schoolType: wizard.get('schoolType'),
    groupsCount: wizard.get('groupsCount'),
  };
};

const mapDispatchToProps = (dispatch) => {
  const actions = bindActionCreators(WizardActions, dispatch);
  return {
    handleAddSubject: actions.addSubjectToGroup,
    handleRemoveSubject: actions.removeSubjectFromGroup,
    generateGroups: actions.generateGroups,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(toJS(GroupList));
