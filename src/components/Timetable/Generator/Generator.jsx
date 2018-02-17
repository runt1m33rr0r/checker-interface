import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Button from 'material-ui/Button';

import { connect } from 'react-redux';
import { generateTimetable, fetchGroups } from '../../../actions/timetable-actions';
import TabView from '../../common/TabView';
import Table from '../Table';

class Generator extends Component {
  componentDidMount = () => {
    this.props.fetchGroups();
  };

  render = () => (
    <div>
      <Button variant="raised" color="primary" onClick={() => this.props.generate()}>
        Генерирай програма
      </Button>
      <TabView tabNames={this.props.groupNames}>
        {this.props.groupNames.map(name => <Table key={name} groupName={name} />)}
      </TabView>
    </div>
  );
}

Generator.propTypes = {
  generate: PropTypes.func.isRequired,
  fetchGroups: PropTypes.func.isRequired,
  groupNames: PropTypes.array.isRequired,
};

const mapStateToProps = ({ timetable }) => ({
  groupNames: timetable.groups,
});

const mapDispatchToProps = dispatch => ({
  generate: () => dispatch(generateTimetable()),
  fetchGroups: () => dispatch(fetchGroups()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Generator);
