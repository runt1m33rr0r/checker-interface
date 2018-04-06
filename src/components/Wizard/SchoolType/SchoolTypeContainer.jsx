import { connect } from 'react-redux';

import Chooser from './SchoolType';
import { setSchoolType, setGroupsCount } from '../../../actions/wizard.actions';

const mapDispatchToProps = dispatch => ({
  handleSchoolTypeChange: type => () => dispatch(setSchoolType(type)),
  handleGroupsCountChange: e => dispatch(setGroupsCount(parseInt(e.target.value, 10))),
});

const mapStateToProps = ({ wizard }) => ({
  schoolType: wizard.schoolType,
  groupsCount: wizard.groupsCount,
});

export default connect(mapStateToProps, mapDispatchToProps)(Chooser);
