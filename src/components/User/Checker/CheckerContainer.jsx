import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';

import { checkStudent } from '../../../actions/student.actions';
import { fetchProfile } from '../../../actions/auth.actions';
import titled from '../../common/TitledComponent';
import Camera from '../../common/Camera';

class CheckerCotainer extends Component {
  constructor(props) {
    super(props);

    this.handleSend = this.handleSend.bind(this);
  }

  componentDidMount() {
    this.props.fetchProfile();
  }

  handleSend(image) {
    this.props.handleSend(this.props.username, image);
  }

  render() {
    return <Camera handleSend={this.handleSend} />;
  }
}

CheckerCotainer.propTypes = {
  fetchProfile: PropTypes.func.isRequired,
  handleSend: PropTypes.func.isRequired,
  username: PropTypes.string.isRequired,
};

const mapStateToProps = ({ auth }) => ({
  username: auth.username,
});

const mapDispatchToProps = dispatch =>
  bindActionCreators({ handleSend: checkStudent, fetchProfile }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(titled(CheckerCotainer, 'Присъствия'));
