import { connect } from 'react-redux';

import { generateGroups } from '../../../actions/wizard-actions';
import GroupList from './GroupList';

const mapStateToProps = ({ wizard }) => ({
  groups: wizard.groupNames,
  schoolType: wizard.schoolType,
  groupsCount: wizard.groupsCount,
});

const mapDispatchToProps = dispatch => ({
  generateGroups: (schoolType, groupsCount) => dispatch(generateGroups(schoolType, groupsCount)),
});

export default connect(mapStateToProps, mapDispatchToProps)(GroupList);
