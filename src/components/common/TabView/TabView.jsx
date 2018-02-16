import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import AppBar from 'material-ui/AppBar';
import Tabs, { Tab } from 'material-ui/Tabs';

import styles from './styles';

class TabView extends Component {
  constructor(props) {
    super(props);
    this.state = {
      idx: 0,
    };
  }

  handleChange = (event, value) => {
    this.setState({ idx: value });
  };

  render = () => {
    const { classes, tabNames, handleTabChange } = this.props;
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
        {tabNames.length > 0 && handleTabChange(tabNames[idx], idx)}
      </div>
    );
  };
}

TabView.propTypes = {
  classes: PropTypes.object.isRequired,
  tabNames: PropTypes.array.isRequired,
  handleTabChange: PropTypes.func.isRequired,
};

export default withStyles(styles)(TabView);
