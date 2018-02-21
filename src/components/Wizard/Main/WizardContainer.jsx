import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import Wizard from './Wizard';
import { finishWizard } from '../../../actions/wizard-actions';
import { setTitle } from '../../../actions/ui-actions';
import { checkSetup, resetSetup } from '../../../actions/system-actions';

class WizardContainer extends Component {
  componentDidMount = () => {
    this.props.setTitle(this.props.title);
    this.props.checkSetup();
  };

  finish = () => {
    const {
      handleFinish, subjects, timeslots, groups,
    } = this.props;
    handleFinish(timeslots, subjects, groups);
  };

  render = () => <Wizard {...this.props} />;
}

WizardContainer.propTypes = {
  title: PropTypes.string.isRequired,
  setTitle: PropTypes.func.isRequired,
  handleFinish: PropTypes.func.isRequired,
  subjects: PropTypes.array.isRequired,
  timeslots: PropTypes.array.isRequired,
  groups: PropTypes.object.isRequired,
  checkSetup: PropTypes.func.isRequired,
};

const mapStateToProps = ({ wizard, system }) => ({
  isReady:
    wizard.subjects.length > 0 && wizard.timeslots.length > 0 && wizard.groupNames.length > 0,
  subjects: wizard.subjects,
  timeslots: wizard.timeslots,
  groups: wizard.groups,
  setupFinished: system.setupFinished,
});

const mapDispatchToProps = dispatch => ({
  handleFinish: (timeslots, subjects, groups) =>
    dispatch(finishWizard(timeslots, subjects, groups)),
  setTitle: title => dispatch(setTitle(title)),
  checkSetup: () => dispatch(checkSetup()),
  handleReset: () => dispatch(resetSetup()),
});

export default connect(mapStateToProps, mapDispatchToProps)(WizardContainer);
