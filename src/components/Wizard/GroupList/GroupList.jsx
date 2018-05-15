import React, { Component, Fragment } from 'react';
import { TextField, Button } from '@material-ui/core';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';

import Group from '../Group';
import TabView from '../../common/TabView';
import styles from './styles';

class GroupList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      groupName: '',
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleAdd = this.handleAdd.bind(this);
  }

  handleChange(e) {
    this.setState({ groupName: e.target.value });
  }

  handleAdd() {
    this.props.addGroup(this.state.groupName);
  }

  render() {
    const { classes, groupNames, groups } = this.props;
    return (
      <Fragment>
        <TabView tabNames={groupNames}>
          {groupNames.map(name => (
            <Group key={name} groupSubjects={groups[name]} groupName={name} />
          ))}
        </TabView>
        <div className={classes.form}>
          <TextField
            label="Име на група"
            value={this.state.groupName}
            onChange={this.handleChange}
            margin="normal"
          />
          <Button
            className={classes.button}
            variant="raised"
            color="primary"
            onClick={this.handleAdd}
          >
            Добави
          </Button>
        </div>
      </Fragment>
    );
  }
}

GroupList.propTypes = {
  groupNames: PropTypes.array.isRequired,
  groups: PropTypes.object.isRequired,
  classes: PropTypes.object.isRequired,
  addGroup: PropTypes.func.isRequired,
};

export default withStyles(styles)(GroupList);
