import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Wizard from './Wizard';

class WizardContainer extends Component {
  componentDidMount() {
    this.props.setTitle(this.props.title);
  }

  render() {
    return <Wizard />;
  }
}

WizardContainer.propTypes = {
  title: PropTypes.string.isRequired,
  setTitle: PropTypes.func.isRequired,
};

export default WizardContainer;
