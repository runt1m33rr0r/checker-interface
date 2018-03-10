import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import AbsencesViewer from './Absences';
import { fetchProfile } from '../../../actions/auth-actions';
import { setTitle } from '../../../actions/ui-actions';

class AbsencesCotainer extends Component {
  componentDidMount = () => {
    this.props.setTitle(this.props.title);
    this.props.fetchProfile();
  };

  render = () => <AbsencesViewer absences={this.profile ? this.props.profile.absences : []} />;
}

AbsencesCotainer.propTypes = {
  title: PropTypes.string.isRequired,
  setTitle: PropTypes.func.isRequired,
  fetchProfile: PropTypes.func.isRequired,
  profile: PropTypes.object.isRequired,
};

const mapStateToProps = ({ auth }) => ({
  profile: auth.profile,
});

const mapDispatchToProps = dispatch => ({
  fetchProfile: () => dispatch(fetchProfile()),
  setTitle: title => dispatch(setTitle(title)),
});

export default connect(mapStateToProps, mapDispatchToProps)(AbsencesCotainer);
