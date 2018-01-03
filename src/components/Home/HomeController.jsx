import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Home from './HomePage';

class HomeController extends Component {
  componentDidMount() {
    this.props.setTitle(this.props.title);
  }

  render() {
    return <Home />;
  }
}

HomeController.propTypes = {
  title: PropTypes.string.isRequired,
  setTitle: PropTypes.func.isRequired,
};

export default HomeController;
