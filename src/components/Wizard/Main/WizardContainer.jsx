import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import Wizard from './Wizard';
import { finishWizard, checkSetup, resetSetup } from '../../../actions/wizard-actions';
import { setTitle } from '../../../actions/ui-actions';

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

  render = () => (
    <Wizard
      handleFinish={this.finish}
      isReady={this.props.isReady}
      setupFinished={this.props.setupFinished}
      handleReset={this.props.handleReset}
    />
  );
}

WizardContainer.propTypes = {
  title: PropTypes.string.isRequired,
  setTitle: PropTypes.func.isRequired,
  handleFinish: PropTypes.func.isRequired,
  isReady: PropTypes.bool.isRequired,
  subjects: PropTypes.array.isRequired,
  timeslots: PropTypes.array.isRequired,
  groups: PropTypes.object.isRequired,
  checkSetup: PropTypes.func.isRequired,
  setupFinished: PropTypes.bool.isRequired,
  handleReset: PropTypes.func.isRequired,
};

const mapStateToProps = ({ wizard }) => ({
  isReady:
    wizard.subjects.length > 0 && wizard.timeslots.length > 0 && wizard.groupNames.length > 0,
  subjects: wizard.subjects,
  timeslots: wizard.timeslots,
  groups: wizard.groups,
  setupFinished: wizard.setupFinished,
});

const mapDispatchToProps = dispatch => ({
  handleFinish: (timeslots, subjects, groups) =>
    dispatch(finishWizard(timeslots, subjects, groups)),
  setTitle: title => dispatch(setTitle(title)),
  checkSetup: () => dispatch(checkSetup()),
  handleReset: () => dispatch(resetSetup()),
});

export default connect(mapStateToProps, mapDispatchToProps)(WizardContainer);
