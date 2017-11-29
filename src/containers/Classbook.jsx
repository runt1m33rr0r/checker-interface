import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';

import * as InterfaceActions from '../actions/interface-actions';
import ClassbookComponent from '../components/Classbook';

class Classbook extends Component {
  componentDidMount() {
    this.props.actions.setPageTitle('Classbook');
  }

  render() {
    return <ClassbookComponent />;
  }
}

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(InterfaceActions, dispatch),
});

Classbook.propTypes = {
  actions: PropTypes.object.isRequired,
};

export default connect(null, mapDispatchToProps)(Classbook);
