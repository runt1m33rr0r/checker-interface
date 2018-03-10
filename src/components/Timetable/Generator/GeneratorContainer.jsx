import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { generateTimetable, fetchGroups } from '../../../actions/timetable-actions';
import { setTitle } from '../../../actions/ui-actions';
import Generator from './Generator';

class GeneratorContainer extends Component {
  componentDidMount = () => this.props.setTitle(this.props.title);

  render = () => <Generator {...this.props} />;
}

GeneratorContainer.propTypes = {
  title: PropTypes.string.isRequired,
  setTitle: PropTypes.func.isRequired,
};

const mapStateToProps = ({ timetable }) => ({
  groupNames: timetable.groupNames,
});

const mapDispatchToProps = dispatch => ({
  setTitle: title => dispatch(setTitle(title)),
  generate: groupToRefresh => dispatch(generateTimetable(groupToRefresh)),
  fetchGroups: groupLessonsToRefresh => dispatch(fetchGroups(groupLessonsToRefresh)),
});

export default connect(mapStateToProps, mapDispatchToProps)(GeneratorContainer);
