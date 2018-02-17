import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Typography from 'material-ui/Typography';
import { connect } from 'react-redux';

import { fetchLessons } from '../../../actions/timetable-actions';

class Table extends Component {
  componentDidMount = () => {
    this.props.fetchLessons(this.props.groupName);
  };

  render = () => (
    <Typography>{this.props.lessons.length > 0 && this.props.lessons[0].subjectCode}</Typography>
  );
}

Table.propTypes = {
  groupName: PropTypes.string.isRequired,
  fetchLessons: PropTypes.func.isRequired,
  lessons: PropTypes.array.isRequired,
};

const mapStateToProps = ({ timetable }) => ({
  lessons: timetable.lessons,
});

const mapDispatchToProps = dispatch => ({
  fetchLessons: groupName => dispatch(fetchLessons(groupName)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Table);
