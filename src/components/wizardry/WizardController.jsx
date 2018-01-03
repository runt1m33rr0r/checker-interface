import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Wizard from './Wizard';

class WizardController extends Component {
  componentDidMount() {
    this.props.setTitle(this.props.title);
  }

  render() {
    return <Wizard />;
  }
}

WizardController.propTypes = {
  title: PropTypes.string.isRequired,
  setTitle: PropTypes.func.isRequired,
};

export default WizardController;
