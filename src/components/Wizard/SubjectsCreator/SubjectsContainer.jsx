import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import SubjectsCreator from './SubjectsCreator';
import * as WizardActions from '../../../actions/wizard.actions';

const mapDispatchToProps = (dispatch) => {
  const actions = bindActionCreators(WizardActions, dispatch);
  return {
    handleAdd: actions.addSubject,
    handleRemove: actions.removeSubject,
  };
};

const mapStateToProps = ({ wizard }) => ({
  subjects: wizard.subjects,
});

export default connect(mapStateToProps, mapDispatchToProps)(SubjectsCreator);
