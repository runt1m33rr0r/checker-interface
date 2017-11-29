import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';

import * as InterfaceActions from '../../actions/interface-actions';
import WizardComponent from '../../components/wizardry/Wizard';

class Wizard extends Component {
  componentDidMount() {
    this.props.actions.setPageTitle('Wizard');
  }

  render() {
    return <WizardComponent />;
  }
}

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(InterfaceActions, dispatch),
});

Wizard.propTypes = {
  actions: PropTypes.object.isRequired,
};

export default connect(null, mapDispatchToProps)(Wizard);
