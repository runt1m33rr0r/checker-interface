import { connect } from 'react-redux';

import { addSubjectToGroup, removeSubjectFromGroup } from '../../../actions/wizard.actions';
import Group from './Group';

const mapStateToProps = ({ wizard }) => ({
  subjects: wizard.subjects,
});

const mapDispatchToProps = dispatch => ({
  handleChange: (groupName, subject) => e =>
    (e.target.checked
      ? dispatch(addSubjectToGroup(groupName, subject))
      : dispatch(removeSubjectFromGroup(groupName, subject))),
});

export default connect(mapStateToProps, mapDispatchToProps)(Group);
