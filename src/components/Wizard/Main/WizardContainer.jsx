import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import Wizard from './Wizard';
import { finishWizard } from '../../../actions/wizard.actions';
import { checkSetup, resetSetup } from '../../../actions/system.actions';
import titled from '../../common/TitledComponent';

class WizardContainer extends Component {
  componentDidMount() {
    this.props.checkSetup();
  }

  finish() {
    const {
      finishWizard: finish, subjects, timeslots, groups,
    } = this.props;
    finish(timeslots, subjects, groups);
  }

  render() {
    return <Wizard {...this.props} handleFinish={this.finish} />;
  }
}

WizardContainer.propTypes = {
  finishWizard: PropTypes.func.isRequired,
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

const mapDispatchToProps = dispatch =>
  bindActionCreators({ finishWizard, checkSetup, handleReset: resetSetup }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(titled(WizardContainer, 'Начална настройка'));
