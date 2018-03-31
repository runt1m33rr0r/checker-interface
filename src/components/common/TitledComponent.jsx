import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { setTitle } from '../../actions/ui.actions';

const titled = (WrappedComponent, title) => {
  class Wrapper extends Component {
    componentDidMount = () => this.props.setTitle(title);

    render = () => <WrappedComponent {...this.props} />;
  }

  const mapDispatchToProps = dispatch => ({
    setTitle: someTitle => dispatch(setTitle(someTitle)),
  });

  Wrapper.propTypes = {
    setTitle: PropTypes.func.isRequired,
  };

  return connect(null, mapDispatchToProps)(Wrapper);
};

export default titled;
