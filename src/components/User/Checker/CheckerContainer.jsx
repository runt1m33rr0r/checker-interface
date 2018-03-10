import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import Checker from './Checker';
import { sendImage } from '../../../actions/student-actions';
import { setTitle } from '../../../actions/ui-actions';

class CheckerCotainer extends Component {
  componentDidMount = () => {
    this.props.setTitle(this.props.title);
    this.props.fetchProfile();
  };

  render = () => <Checker {...this.props} />;
}

CheckerCotainer.propTypes = {
  title: PropTypes.string.isRequired,
  setTitle: PropTypes.func.isRequired,
  fetchProfile: PropTypes.func.isRequired,
};

const mapDispatchToProps = dispatch => ({
  handleSend: image => dispatch(sendImage(image)),
  setTitle: title => dispatch(setTitle(title)),
});

export default connect(null, mapDispatchToProps)(CheckerCotainer);
