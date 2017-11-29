import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';

import Chooser from '../../components/wizardry/SchoolTypeChooser';
import * as WizardActions from '../../actions/wizard-actions';

const SchoolTypeChooser = ({ actions, schoolType }) => (
  <Chooser schoolType={schoolType} handleChange={actions.setSchoolType} />
);

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(WizardActions, dispatch),
});

const mapStateToProps = ({ wizard }) => ({
  schoolType: wizard.schoolType,
});

SchoolTypeChooser.propTypes = {
  actions: PropTypes.object.isRequired,
  schoolType: PropTypes.string.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(SchoolTypeChooser);
