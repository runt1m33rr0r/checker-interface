import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs, { Tab } from '@material-ui/core/Tabs';

import styles from './styles';

class TabView extends Component {
  constructor(props) {
    super(props);
    this.state = {
      idx: 0,
    };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event, idx) {
    this.setState({ idx });
    if (typeof this.props.onChange === 'function') {
      this.props.onChange(idx, this.props.tabNames[idx]);
    }
  }

  render() {
    const { classes, tabNames } = this.props;
    const { idx } = this.state;
    return (
      <div className={classes.root}>
        <AppBar position="static" color="default">
          <Tabs
            value={idx}
            onChange={this.handleChange}
            indicatorColor="primary"
            textColor="primary"
            scrollable
            scrollButtons="auto"
          >
            {tabNames.length > 0 && tabNames.map(el => <Tab key={el} label={el} />)}
          </Tabs>
        </AppBar>
        {tabNames.length > 0 && this.props.children[idx]}
      </div>
    );
  }
}

TabView.propTypes = {
  classes: PropTypes.object.isRequired,
  tabNames: PropTypes.array.isRequired,
  children: PropTypes.array.isRequired,
  onChange: PropTypes.func,
};

export default withStyles(styles)(TabView);
