import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { setTitle } from '../../actions/ui.actions';

const titled = (WrappedComponent, title) => {
  class Wrapper extends Component {
    componentDidMount() {
      this.props.setTitle(title);
    }

    render() {
      return <WrappedComponent {...this.props} />;
    }
  }

  const mapDispatchToProps = dispatch => ({
    setTitle: newTitle => dispatch(setTitle(newTitle)),
  });

  Wrapper.propTypes = {
    setTitle: PropTypes.func.isRequired,
  };

  return connect(null, mapDispatchToProps)(Wrapper);
};

export default titled;
