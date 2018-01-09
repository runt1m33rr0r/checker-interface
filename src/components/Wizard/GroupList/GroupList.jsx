import React, { Component } from 'react';
import Paper from 'material-ui/Paper';
import Table, { TableBody, TableCell, TableHead, TableRow } from 'material-ui/Table';
import Switch from 'material-ui/Switch';
import { FormControlLabel } from 'material-ui/Form';
import withStyles from 'material-ui/styles/withStyles';
import PropTypes from 'prop-types';

import styles from './styles';

class GroupList extends Component {
  componentDidMount() {
    this.props.generateGroups();
  }

  render() {
    const {
      classes, handleAddSubject, handleRemoveSubject, groups, subjects,
    } = this.props;

    return (
      <Paper className={classes.root}>
        <Table className={classes.table}>
          <TableHead>
            <TableRow>
              {groups.map(group => <TableCell key={group.name}>{group.name}</TableCell>)}
            </TableRow>
          </TableHead>
          <TableBody>
            {subjects.map(subject => (
              <TableRow key={subject}>
                {groups.map(group => (
                  <TableCell key={group.name}>
                    <FormControlLabel
                      control={
                        <Switch
                          onChange={(e) => {
                            if (e.target.checked) {
                              handleAddSubject(group.name, e.target.value);
                            } else {
                              handleRemoveSubject(group.name, e.target.value);
                            }
                          }}
                          value={subject}
                        />
                      }
                      label={subject}
                    />
                  </TableCell>
                ))}
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Paper>
    );
  }
}

GroupList.propTypes = {
  classes: PropTypes.any.isRequired,
  groups: PropTypes.array.isRequired,
  subjects: PropTypes.array.isRequired,
  handleAddSubject: PropTypes.func.isRequired,
  handleRemoveSubject: PropTypes.func.isRequired,
  generateGroups: PropTypes.func.isRequired,
};

export default withStyles(styles)(GroupList);
