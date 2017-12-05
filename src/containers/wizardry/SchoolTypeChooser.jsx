import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';

import Chooser from '../../components/wizardry/SchoolTypeChooser';
import * as WizardActions from '../../actions/wizard-actions';

const SchoolTypeChooser = ({ actions, schoolType, groupsCount }) => (
  <Chooser
    schoolType={schoolType}
    groupsCount={groupsCount}
    handleSchoolTypeChange={actions.setSchoolType}
    handleGroupsCountChange={actions.setGroupsCount}
  />
);

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(WizardActions, dispatch),
});

const mapStateToProps = ({ wizard }) => ({
  schoolType: wizard.schoolType,
  groupsCount: wizard.groupsCount,
});

SchoolTypeChooser.propTypes = {
  actions: PropTypes.object.isRequired,
  schoolType: PropTypes.string.isRequired,
  groupsCount: PropTypes.number.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(SchoolTypeChooser);
