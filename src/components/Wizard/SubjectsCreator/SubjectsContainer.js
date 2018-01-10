import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import SubjectsCreator from './SubjectsCreator';
import * as WizardActions from '../../../actions/wizard-actions';
import toJS from '../../common/ToJS';

const mapDispatchToProps = (dispatch) => {
  const actions = bindActionCreators(WizardActions, dispatch);
  return {
    handleAdd: actions.addSubject,
    handleRemove: actions.removeSubject,
  };
};

const mapStateToProps = state => ({
  subjects: state.get('wizard').get('subjects'),
});

export default connect(mapStateToProps, mapDispatchToProps)(toJS(SubjectsCreator));
