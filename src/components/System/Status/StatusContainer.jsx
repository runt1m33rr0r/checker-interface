import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import Status from './Status';
import { checkSetup } from '../../../actions/system-actions';

class StatusContainer extends Component {
  componentDidMount = () => {
    this.props.checkSetup();
  };

  render = () => <Status {...this.props} />;
}

StatusContainer.propTypes = {
  checkSetup: PropTypes.func.isRequired,
};

const mapStateToProps = ({ system }) => ({
  setupFinished: system.setupFinished,
});

const mapDispatchToProps = dispatch => ({
  checkSetup: () => dispatch(checkSetup()),
});

export default connect(mapStateToProps, mapDispatchToProps)(StatusContainer);
