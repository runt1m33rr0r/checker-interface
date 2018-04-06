import { connect } from 'react-redux';

import { addSubjectToGroup, removeSubjectFromGroup } from '../../../actions/wizard.actions';
import Group from './Group';

const mapStateToProps = ({ wizard }) => ({
  subjects: wizard.subjects,
  groupSubjects: wizard.groupSubjects,
});

const mapDispatchToProps = dispatch => ({
  handleChange: (subject, groupName) => e =>
    (e.target.checked
      ? dispatch(addSubjectToGroup(groupName, subject))
      : dispatch(removeSubjectFromGroup(groupName, subject))),
});

export default connect(mapStateToProps, mapDispatchToProps)(Group);
