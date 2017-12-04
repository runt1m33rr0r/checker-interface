import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';

import Creator from '../../components/wizardry/SubjectsCreator';
import * as WizardActions from '../../actions/wizard-actions';

const SubjectsCreator = ({ actions, subjects }) => (
  <Creator
    subjects={subjects}
    handleAdd={actions.addSubject}
    handleRemove={actions.removeSubject}
  />
);

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(WizardActions, dispatch),
});

const mapStateToProps = ({ wizard }) => ({
  subjects: wizard.subjects,
});

SubjectsCreator.propTypes = {
  actions: PropTypes.object.isRequired,
  subjects: PropTypes.array.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(SubjectsCreator);
