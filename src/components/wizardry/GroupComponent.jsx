import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import { FormGroup, FormControlLabel } from 'material-ui/Form';
import Checkbox from 'material-ui/Checkbox';
import ExpansionPanel, {
  ExpansionPanelDetails,
  ExpansionPanelSummary,
} from 'material-ui/ExpansionPanel';
import Typography from 'material-ui/Typography';
import ExpandMoreIcon from 'material-ui-icons/ExpandMore';

const styles = theme => ({
  root: {
    width: '50%',
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
  },
  secondaryHeading: {
    fontSize: theme.typography.pxToRem(15),
    color: theme.palette.text.secondary,
  },
  icon: {
    verticalAlign: 'bottom',
    height: 20,
    width: 20,
  },
  details: {
    alignItems: 'center',
  },
  column: {
    flexBasis: '33.3%',
  },
  helper: {
    borderLeft: `2px solid ${theme.palette.text.lightDivider}`,
    padding: `${theme.spacing.unit}px ${theme.spacing.unit * 2}px`,
  },
  link: {
    color: theme.palette.primary[500],
    textDecoration: 'none',
    '&:hover': {
      textDecoration: 'underline',
    },
  },
});

const GroupComponent = ({
  classes,
  subjects,
  groupName,
  handleAddSubject,
  handleRemoveSubject,
}) => (
  <div className={classes.root}>
    <ExpansionPanel defaultExpanded>
      <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
        <div className={classes.column}>
          <Typography className={classes.heading}>{groupName}</Typography>
        </div>
        <div className={classes.column}>
          <Typography className={classes.secondaryHeading}>
            Изберете кои предмети се изучават от групата
          </Typography>
        </div>
      </ExpansionPanelSummary>
      <ExpansionPanelDetails className={classes.details}>
        <div className={classes.column} />
        <div className={classes.column}>
          <FormGroup row>
            {subjects.map(value => (
              <FormControlLabel
                key={value}
                control={
                  <Checkbox
                    onChange={(e) => {
                      if (e.target.checked) {
                        handleAddSubject(groupName, e.target.value);
                      } else {
                        handleRemoveSubject(groupName, e.target.value);
                      }
                    }}
                    value={value}
                  />
                }
                label={value}
              />
            ))}
          </FormGroup>
        </div>
      </ExpansionPanelDetails>
    </ExpansionPanel>
  </div>
);

GroupComponent.propTypes = {
  classes: PropTypes.object.isRequired,
  subjects: PropTypes.array.isRequired,
  groupName: PropTypes.string.isRequired,
  handleAddSubject: PropTypes.func.isRequired,
  handleRemoveSubject: PropTypes.func.isRequired,
};

export default withStyles(styles)(GroupComponent);
