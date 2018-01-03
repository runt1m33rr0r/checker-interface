import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import Chooser from './SchoolType';
import * as WizardActions from '../../../actions/wizard-actions';

const mapDispatchToProps = (dispatch) => {
  const actions = bindActionCreators(WizardActions, dispatch);
  return {
    handleSchoolTypeChange: actions.setSchoolType,
    handleGroupsCountChange: actions.setGroupsCount,
  };
};

const mapStateToProps = ({ wizard }) => ({
  schoolType: wizard.schoolType,
  groupsCount: wizard.groupsCount,
});

export default connect(mapStateToProps, mapDispatchToProps)(Chooser);
