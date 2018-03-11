import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import AbsencesViewer from './Absences';
import { fetchProfile } from '../../../actions/auth-actions';
import titled from '../../common/TitledComponent';

class AbsencesCotainer extends Component {
  componentDidMount = () => this.props.fetchProfile();

  render = () => <AbsencesViewer absences={this.profile ? this.props.profile.absences : []} />;
}

AbsencesCotainer.propTypes = {
  fetchProfile: PropTypes.func.isRequired,
  profile: PropTypes.object.isRequired,
};

const mapStateToProps = ({ auth }) => ({
  profile: auth.profile,
});

const mapDispatchToProps = dispatch => ({
  fetchProfile: () => dispatch(fetchProfile()),
});

export default connect(mapStateToProps, mapDispatchToProps)(titled(AbsencesCotainer, 'Отсъствия'));
