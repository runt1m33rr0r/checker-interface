import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
  TextField,
  List,
  ListItem,
  ListItemSecondaryAction,
  ListItemText,
  IconButton,
  Button,
} from '@material-ui/core';
import { Delete } from '@material-ui/icons';
import { withStyles } from '@material-ui/core/styles';

import styles from './styles';

class SubjectsCreator extends Component {
  constructor(props) {
    super(props);

    this.state = {
      subjectName: '',
    };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    this.setState({
      subjectName: e.target.value,
    });
  }

  render() {
    const { classes } = this.props;
    return (
      <div className={classes.root}>
        <form className={classes.form} noValidate autoComplete="off">
          <TextField
            margin="normal"
            label="Име на предмет"
            className={classes.textField}
            onChange={this.handleChange}
          />
          <Button
            disabled={this.state.subjectName.length < 3}
            variant="raised"
            color="primary"
            onClick={this.props.handleAdd(this.state.subjectName)}
          >
            Добави
          </Button>
        </form>
        <List>
          {this.props.subjects.map(value => (
            <ListItem key={value} dense className={classes.listItem}>
              <ListItemText primary={value} />
              <ListItemSecondaryAction>
                <IconButton onClick={this.props.handleRemove(value)}>
                  <Delete />
                </IconButton>
              </ListItemSecondaryAction>
            </ListItem>
          ))}
        </List>
      </div>
    );
  }
}

SubjectsCreator.propTypes = {
  handleAdd: PropTypes.func.isRequired,
  handleRemove: PropTypes.func.isRequired,
  subjects: PropTypes.array.isRequired,
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(SubjectsCreator);
