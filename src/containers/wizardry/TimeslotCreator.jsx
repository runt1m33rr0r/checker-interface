import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';

import Creator from '../../components/wizardry/TimeslotCreator';
import * as WizardActions from '../../actions/wizard-actions';

const TimeslotCreator = ({ actions, timeslots }) => (
  <Creator
    timeslots={timeslots}
    handleAdd={actions.addTimeslot}
    handleRemove={actions.removeTimeslot}
  />
);

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(WizardActions, dispatch),
});

const mapStateToProps = ({ wizard }) => ({
  timeslots: wizard.timeslots,
});

TimeslotCreator.propTypes = {
  actions: PropTypes.object.isRequired,
  timeslots: PropTypes.array.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(TimeslotCreator);
