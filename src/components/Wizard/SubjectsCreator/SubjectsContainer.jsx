import { connect } from 'react-redux';

import SubjectsCreator from './SubjectsCreator';
import { addSubject, removeSubject } from '../../../actions/wizard.actions';

const mapDispatchToProps = dispatch => ({
  handleAdd: subject => () => dispatch(addSubject(subject)),
  handleRemove: subject => () => dispatch(removeSubject(subject)),
});

const mapStateToProps = ({ wizard }) => ({
  subjects: wizard.subjects,
});

export default connect(mapStateToProps, mapDispatchToProps)(SubjectsCreator);
