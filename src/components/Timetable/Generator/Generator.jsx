import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Button from 'material-ui/Button';
import { withStyles } from 'material-ui/styles';

import TabView from '../../common/TabView';
import Table from '../Table';

import styles from './styles';

class Generator extends Component {
  componentDidMount = () => {
    this.props.fetchGroups();
  };

  render = () => (
    <div className={this.props.classes.root}>
      <TabView tabNames={this.props.groupNames}>
        {this.props.groupNames.map(name => <Table key={name} groupName={name} />)}
      </TabView>
      <Button
        className={this.props.classes.btn}
        variant="raised"
        color="primary"
        onClick={() => this.props.generate()}
      >
        Генерирай програма
      </Button>
    </div>
  );
}

Generator.propTypes = {
  generate: PropTypes.func.isRequired,
  fetchGroups: PropTypes.func.isRequired,
  groupNames: PropTypes.array.isRequired,
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Generator);
