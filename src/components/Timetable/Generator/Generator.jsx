import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Button from 'material-ui/Button';
import { withStyles } from 'material-ui/styles';

import TabView from '../../common/TabView';
import Table from '../Table';

import styles from './styles';

class Generator extends Component {
  constructor(props) {
    super(props);

    this.state = {
      nameIdx: 0,
    };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(idx) {
    this.setState({ nameIdx: idx });
  }

  render() {
    return (
      <div className={this.props.classes.root}>
        <TabView onChange={this.handleChange} tabNames={this.props.groupNames}>
          {this.props.groupNames.map(name => <Table key={name} groupName={name} />)}
        </TabView>
        <Button
          className={this.props.classes.btn}
          variant="raised"
          color="primary"
          onClick={this.props.generate(this.props.groupNames[this.state.nameIdx])}
        >
          Генерирай програма
        </Button>
      </div>
    );
  }
}

Generator.propTypes = {
  generate: PropTypes.func.isRequired,
  groupNames: PropTypes.array.isRequired,
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Generator);
