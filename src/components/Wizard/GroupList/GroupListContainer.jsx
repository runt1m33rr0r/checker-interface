import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';

import Group from '../Group';
import * as WizardActions from '../../../actions/wizard-actions';

class GroupList extends Component {
  componentDidMount() {
    this.props.actions.generateGroups();
  }

  render() {
    return this.props.groups.map(group => (
      <Group
        style={{ maxHeight: '100%', overflow: 'auto' }}
        key={group.name}
        groupName={group.name}
      />
    ));
  }
}

const mapStateToProps = ({ wizard }) => ({
  groups: wizard.groups,
});

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(WizardActions, dispatch),
});

GroupList.propTypes = {
  actions: PropTypes.object.isRequired,
  groups: PropTypes.array.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(GroupList);
