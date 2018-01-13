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
    return <Wizard handleFinish={this.props.handleFinish} />;
  }
}

const mapDispatchToProps = dispatch => ({
  handleFinish: () => dispatch(finishWizard()),
  setTitle: title => dispatch(setTitle(title)),
});

WizardContainer.propTypes = {
  title: PropTypes.string.isRequired,
  setTitle: PropTypes.func.isRequired,
  handleFinish: PropTypes.func.isRequired,
};

export default connect(null, mapDispatchToProps)(WizardContainer);
