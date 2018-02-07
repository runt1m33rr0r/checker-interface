import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import Wizard from './Wizard';
import { finishWizard } from '../../../actions/wizard-actions';
import { setTitle } from '../../../actions/ui-actions';

class WizardContainer extends Component {
  componentDidMount() {
    this.props.setTitle(this.props.title);
  }

  render() {
    return <Wizard handleFinish={this.props.handleFinish} isReady={this.props.isReady} />;
  }
}

const mapStateToProps = ({ wizard }) => ({
  isReady:
    wizard.subjects.length > 0 && wizard.timeslots.length > 0 && wizard.groupNames.length > 0,
});

const mapDispatchToProps = dispatch => ({
  handleFinish: () => dispatch(finishWizard()),
  setTitle: title => dispatch(setTitle(title)),
});

WizardContainer.propTypes = {
  title: PropTypes.string.isRequired,
  setTitle: PropTypes.func.isRequired,
  handleFinish: PropTypes.func.isRequired,
  isReady: PropTypes.bool.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(WizardContainer);
