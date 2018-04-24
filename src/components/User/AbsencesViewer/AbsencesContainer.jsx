import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';

import AbsencesViewer from './Absences';
import { fetchStudentAbsences, fetchTeacherAbsences } from '../../../actions/user.actions';
import titled from '../../common/TitledComponent';

class AbsencesCotainer extends Component {
  componentDidMount() {
    if (this.props.roles.includes('Teacher')) {
      this.props.fetchTeacherAbsences();
    } else if (this.props.roles.includes('Student')) {
      this.props.fetchStudentAbsences();
    }
  }

  render() {
    return <AbsencesViewer absences={this.props.absences} />;
  }
}

AbsencesCotainer.propTypes = {
  fetchStudentAbsences: PropTypes.func.isRequired,
  fetchTeacherAbsences: PropTypes.func.isRequired,
  absences: PropTypes.array.isRequired,
  roles: PropTypes.array.isRequired,
};

const mapStateToProps = ({ user, auth }) => ({
  absences: user.absences,
  roles: auth.roles,
});

const mapDispatchToProps = dispatch =>
  bindActionCreators({ fetchStudentAbsences, fetchTeacherAbsences }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(titled(AbsencesCotainer, 'Отсъствия'));
