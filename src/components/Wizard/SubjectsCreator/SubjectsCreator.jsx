import React, { Component } from 'react';
import TextField from 'material-ui/TextField';
import PropTypes from 'prop-types';
import List, { ListItem, ListItemSecondaryAction, ListItemText } from 'material-ui/List';
import IconButton from 'material-ui/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';
import { withStyles } from 'material-ui/styles';
import Button from 'material-ui/Button';

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
                  <DeleteIcon />
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
