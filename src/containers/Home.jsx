import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import HomeComponent from '../components/Home';
import * as InterfaceActions from '../actions';

class Home extends Component {
  componentDidMount() {
    this.props.actions.setPageTitle('Начало');
  }

  render() {
    return <HomeComponent />;
  }
}

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(InterfaceActions, dispatch),
});

Home.propTypes = {
  actions: PropTypes.object.isRequired,
};

export default connect(null, mapDispatchToProps)(Home);
