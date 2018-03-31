import { connect } from 'react-redux';

import { generateTimetable, fetchGroups } from '../../../actions/timetable.actions';
import Generator from './Generator';
import titled from '../../common/TitledComponent';

const mapStateToProps = ({ timetable }) => ({
  groupNames: timetable.groupNames,
});

const mapDispatchToProps = dispatch => ({
  generate: groupToRefresh => dispatch(generateTimetable(groupToRefresh)),
  fetchGroups: groupLessonsToRefresh => dispatch(fetchGroups(groupLessonsToRefresh)),
});

export default connect(mapStateToProps, mapDispatchToProps)(titled(Generator, 'Генератор на програма'));
