import { connect } from 'react-redux';
import { generateTimetable, fetchGroups } from '../../../actions/timetable-actions';

import Generator from './Generator';

const mapStateToProps = ({ timetable }) => ({
  groupNames: timetable.groups,
});

const mapDispatchToProps = dispatch => ({
  generate: () => dispatch(generateTimetable()),
  fetchGroups: () => dispatch(fetchGroups()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Generator);
