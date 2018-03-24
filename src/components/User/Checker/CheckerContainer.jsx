import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import Checker from './Checker';
import { sendImage } from '../../../actions/student-actions';
import { fetchProfile } from '../../../actions/auth-actions';
import titled from '../../common/TitledComponent';

class CheckerCotainer extends Component {
  componentDidMount = () => this.props.fetchProfile();

  render = () => <Checker {...this.props} />;
}

CheckerCotainer.propTypes = {
  fetchProfile: PropTypes.func.isRequired,
};

const mapDispatchToProps = dispatch => ({
  handleSend: image => dispatch(sendImage(image)),
  fetchProfile: () => dispatch(fetchProfile()),
});

export default connect(null, mapDispatchToProps)(
  titled(CheckerCotainer, 'Присъствия'),
);
