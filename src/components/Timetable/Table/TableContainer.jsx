import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { fetchGroupLessons, fetchUserLessons } from '../../../actions/timetable.actions';
import Table from './Table';

class TableContainer extends Component {
  componentDidMount() {
    if (this.props.groupName) {
      this.props.fetchGroupLessons(this.props.groupName);
    } else {
      this.props.fetchUserLessons();
    }
  }

  render() {
    return <Table {...this.props} showGroups />;
  }
}

TableContainer.defaultProps = {
  groupName: '',
};

TableContainer.propTypes = {
  groupName: PropTypes.string,
  fetchGroupLessons: PropTypes.func.isRequired,
  fetchUserLessons: PropTypes.func.isRequired,
};

const mapStateToProps = ({ timetable }) => ({
  lessons: timetable.lessons,
});

const mapDispatchToProps = dispatch =>
  bindActionCreators({ fetchGroupLessons, fetchUserLessons }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(TableContainer);
