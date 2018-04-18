import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { generateGroups, addGroup } from '../../../actions/wizard.actions';
import GroupList from './GroupList';

class Container extends Component {
  componentDidMount() {
    this.props.generateGroups(this.props.schoolType, this.props.groupsCount);
  }

  render() {
    return <GroupList {...this.props} />;
  }
}

Container.propTypes = {
  schoolType: PropTypes.string.isRequired,
  groupsCount: PropTypes.number.isRequired,
  generateGroups: PropTypes.func.isRequired,
};

const mapStateToProps = ({ wizard }) => ({
  groupNames: wizard.groupNames,
  schoolType: wizard.schoolType,
  groupsCount: wizard.groupsCount,
  groups: wizard.groups,
});

const mapDispatchToProps = dispatch => bindActionCreators({ generateGroups, addGroup }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Container);
