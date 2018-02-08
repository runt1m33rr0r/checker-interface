import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { setTitle } from '../../actions/ui-actions';
import Home from './HomePage';

class HomeContainer extends Component {
  componentDidMount = () => this.props.setTitle(this.props.title);

  render = () => <Home />;
}

HomeContainer.propTypes = {
  title: PropTypes.string.isRequired,
  setTitle: PropTypes.func.isRequired,
};

const mapDispatchToProps = dispatch => ({
  setTitle: title => dispatch(setTitle(title)),
});

export default connect(null, mapDispatchToProps)(HomeContainer);
