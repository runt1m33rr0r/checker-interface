import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import AppBar from 'material-ui/AppBar';
import Tabs, { Tab } from 'material-ui/Tabs';

import Group from '../Group';
import styles from './styles';

class ScrollableTabsButtonAuto extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: 0,
    };
  }

  componentDidMount = () => {
    const { generateGroups, schoolType, groupsCount } = this.props;
    generateGroups(schoolType, groupsCount);
  };

  handleChange = (event, value) => {
    this.setState({ value });
  };

  render = () => {
    const { classes, groups } = this.props;
    const { value } = this.state;

    return (
      <div className={classes.root}>
        <AppBar position="static" color="default">
          <Tabs
            value={value}
            onChange={this.handleChange}
            indicatorColor="primary"
            textColor="primary"
            scrollable
            scrollButtons="auto"
          >
            {groups.map(group => <Tab key={group} label={group} />)}
          </Tabs>
        </AppBar>
        {groups.length > 0 && <Group groupName={groups[value]} />}
      </div>
    );
  };
}

ScrollableTabsButtonAuto.propTypes = {
  classes: PropTypes.object.isRequired,
  groups: PropTypes.array.isRequired,
  schoolType: PropTypes.string.isRequired,
  groupsCount: PropTypes.number.isRequired,
  generateGroups: PropTypes.func.isRequired,
};

export default withStyles(styles)(ScrollableTabsButtonAuto);
