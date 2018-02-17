import { connect } from 'react-redux';
import { fetchLessons } from '../../../actions/timetable-actions';

import Table from './Table';

const mapStateToProps = ({ timetable }) => ({
  lessons: timetable.lessons,
});

const mapDispatchToProps = dispatch => ({
  fetchLessons: groupName => dispatch(fetchLessons(groupName)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Table);
