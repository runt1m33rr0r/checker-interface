import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { generateGroups } from '../../../actions/wizard-actions';
import Group from '../Group';
import TabView from '../../common/TabView';

class GroupList extends Component {
  componentDidMount = () => {
    this.props.generate(this.props.schoolType, this.props.groupsCount);
  };

  handleChange = title => <Group groupSubjects={this.props.groups[title]} groupName={title} />;

  render = () => <TabView tabNames={this.props.groupNames} handleTabChange={this.handleChange} />;
}

GroupList.propTypes = {
  groupNames: PropTypes.array.isRequired,
  schoolType: PropTypes.string.isRequired,
  groupsCount: PropTypes.number.isRequired,
  generate: PropTypes.func.isRequired,
  groups: PropTypes.object.isRequired,
};

const mapStateToProps = ({ wizard }) => ({
  groupNames: wizard.groupNames,
  schoolType: wizard.schoolType,
  groupsCount: wizard.groupsCount,
  groups: wizard.groups,
});

const mapDispatchToProps = dispatch => ({
  generate: (schoolType, groupsCount) => dispatch(generateGroups(schoolType, groupsCount)),
});

export default connect(mapStateToProps, mapDispatchToProps)(GroupList);
