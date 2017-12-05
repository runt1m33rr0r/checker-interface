import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';

import GroupComponent from '../../components/wizardry/GroupComponent';
import * as WizardActions from '../../actions/wizard-actions';

const Group = ({ actions, subjects, groupName }) => (
  <GroupComponent
    subjects={subjects}
    groupName={groupName}
    handleAddSubject={actions.addSubjectToGroup}
    handleRemoveSubject={actions.removeSubjectFromGroup}
  />
);

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(WizardActions, dispatch),
});

const mapStateToProps = ({ wizard }) => ({
  subjects: wizard.subjects,
});

Group.propTypes = {
  actions: PropTypes.object.isRequired,
  groupName: PropTypes.string.isRequired,
  subjects: PropTypes.array.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(Group);
