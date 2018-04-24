import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';

import { checkStudent } from '../../../actions/student.actions';
import { fetchProfile } from '../../../actions/auth.actions';
import titled from '../../common/TitledComponent';
import Camera from '../../common/Camera';

class CheckerCotainer extends Component {
  componentDidMount() {
    this.props.fetchProfile();
  }

  render() {
    return <Camera handleSend={this.props.handleSend} />;
  }
}

CheckerCotainer.propTypes = {
  fetchProfile: PropTypes.func.isRequired,
  handleSend: PropTypes.func.isRequired,
};

const mapDispatchToProps = dispatch =>
  bindActionCreators({ handleSend: checkStudent, fetchProfile }, dispatch);

export default connect(null, mapDispatchToProps)(titled(CheckerCotainer, 'Присъствия'));
