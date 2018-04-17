import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import TextField from 'material-ui/TextField';
import Button from 'material-ui/Button';
import { withStyles } from 'material-ui/styles';
import ExpansionPanel, {
  ExpansionPanelSummary,
  ExpansionPanelDetails,
} from 'material-ui/ExpansionPanel';
import Typography from 'material-ui/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

import { generateGroups } from '../../../actions/wizard.actions';
import Group from '../Group';
import TabView from '../../common/TabView';

const styles = {
  root: {
    width: '100%',
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    alignContent: 'center',
  },
  button: {
    margin: '0.5em',
  },
};

class GroupList extends Component {
  componentDidMount() {
    this.props.generateGroups(this.props.schoolType, this.props.groupsCount);
  }

  render() {
    const { classes } = this.props;

    return (
      <div className={classes.root}>
        {/* <div>
          <TabView tabNames={this.props.groupNames}>
            {this.props.groupNames.map(name => (
              <Group key={name} groupSubjects={this.props.groups[name]} groupName={name} />
            ))}
          </TabView>
        </div> */}
        <div>
          <TextField label="Име на група" value="test" margin="normal" />
          <Button className={classes.button} variant="raised" color="primary">
            Добави
          </Button>
        </div>

        <ExpansionPanel>
          <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
            <Typography>Expansion Panel 1</Typography>
          </ExpansionPanelSummary>
          <ExpansionPanelDetails>
            <Typography>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus
              ex, sit amet blandit leo lobortis eget.
            </Typography>
          </ExpansionPanelDetails>
        </ExpansionPanel>
        <ExpansionPanel>
          <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
            <Typography>Expansion Panel 1</Typography>
          </ExpansionPanelSummary>
          <ExpansionPanelDetails>
            <Typography>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus
              ex, sit amet blandit leo lobortis eget.
            </Typography>
          </ExpansionPanelDetails>
        </ExpansionPanel>
        <ExpansionPanel>
          <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
            <Typography>Expansion Panel 1</Typography>
          </ExpansionPanelSummary>
          <ExpansionPanelDetails>
            <Typography>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus
              ex, sit amet blandit leo lobortis eget.
            </Typography>
          </ExpansionPanelDetails>
        </ExpansionPanel>
        <ExpansionPanel>
          <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
            <Typography>Expansion Panel 1</Typography>
          </ExpansionPanelSummary>
          <ExpansionPanelDetails>
            <Typography>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus
              ex, sit amet blandit leo lobortis eget.
            </Typography>
          </ExpansionPanelDetails>
        </ExpansionPanel>
      </div>
    );
  }
}

GroupList.propTypes = {
  groupNames: PropTypes.array.isRequired,
  schoolType: PropTypes.string.isRequired,
  groupsCount: PropTypes.number.isRequired,
  generateGroups: PropTypes.func.isRequired,
  groups: PropTypes.object.isRequired,
  classes: PropTypes.object.isRequired,
};

const mapStateToProps = ({ wizard }) => ({
  groupNames: wizard.groupNames,
  schoolType: wizard.schoolType,
  groupsCount: wizard.groupsCount,
  groups: wizard.groups,
});

const mapDispatchToProps = dispatch => bindActionCreators({ generateGroups }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(GroupList));
