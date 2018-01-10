import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Home from './HomePage';

class HomeContainer extends Component {
  componentDidMount() {
    this.props.setTitle(this.props.title);
  }

  render() {
    return <Home />;
  }
}

HomeContainer.propTypes = {
  title: PropTypes.string.isRequired,
  setTitle: PropTypes.func.isRequired,
};

export default HomeContainer;
