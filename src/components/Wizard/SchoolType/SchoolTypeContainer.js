import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import Chooser from './SchoolType';
import * as WizardActions from '../../../actions/wizard-actions';
import toJS from '../../common/ToJS';

const mapDispatchToProps = (dispatch) => {
  const actions = bindActionCreators(WizardActions, dispatch);
  return {
    handleSchoolTypeChange: actions.setSchoolType,
    handleGroupsCountChange: actions.setGroupsCount,
  };
};

const mapStateToProps = (state) => {
  const wizard = state.get('wizard');
  return {
    schoolType: wizard.get('schoolType'),
    groupsCount: wizard.get('groupsCount'),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(toJS(Chooser));
