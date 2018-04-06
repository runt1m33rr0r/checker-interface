import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { generateGroups } from '../../../actions/wizard.actions';
import Group from '../Group';
import TabView from '../../common/TabView';

class GroupList extends Component {
  componentDidMount() {
    this.props.generateGroups(this.props.schoolType, this.props.groupsCount);
  }

  render() {
    return (
      <TabView tabNames={this.props.groupNames}>
        {this.props.groupNames.map(name => (
          <Group key={name} groupSubjects={this.props.groups[name]} groupName={name} />
        ))}
      </TabView>
    );
  }
}

GroupList.propTypes = {
  groupNames: PropTypes.array.isRequired,
  schoolType: PropTypes.string.isRequired,
  groupsCount: PropTypes.number.isRequired,
  generateGroups: PropTypes.func.isRequired,
  groups: PropTypes.object.isRequired,
};

const mapStateToProps = ({ wizard }) => ({
  groupNames: wizard.groupNames,
  schoolType: wizard.schoolType,
  groupsCount: wizard.groupsCount,
  groups: wizard.groups,
});

const mapDispatchToProps = dispatch => bindActionCreators({ generateGroups }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(GroupList);
