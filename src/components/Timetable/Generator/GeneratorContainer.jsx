import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { generateTimetable, fetchGroups } from '../../../actions/timetable.actions';
import Generator from './Generator';
import titled from '../../common/TitledComponent';

class GeneratorContainer extends Component {
  componentDidMount() {
    this.props.fetchGroups();
  }

  render() {
    return <Generator {...this.props} />;
  }
}

GeneratorContainer.propTypes = {
  fetchGroups: PropTypes.func.isRequired,
};

const mapStateToProps = ({ timetable }) => ({
  groupNames: timetable.groupNames,
});

const mapDispatchToProps = dispatch => ({
  generate: lessonsToRefresh => () => dispatch(generateTimetable(lessonsToRefresh)),
  fetchGroups: () => dispatch(fetchGroups()),
});

export default connect(mapStateToProps, mapDispatchToProps)(titled(GeneratorContainer, 'Генератор на програма'));
