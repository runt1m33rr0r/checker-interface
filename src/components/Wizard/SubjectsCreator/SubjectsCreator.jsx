import React, { Component } from 'react';
import TextField from 'material-ui/TextField';
import PropTypes from 'prop-types';
import List, { ListItem, ListItemSecondaryAction, ListItemText } from 'material-ui/List';
import IconButton from 'material-ui/IconButton';
import DeleteIcon from 'material-ui-icons/Delete';
import { withStyles } from 'material-ui/styles';

import PrimaryButton from '../../common/PrimaryButton';
import styles from './styles';

class SubjectsCreator extends Component {
  constructor(props) {
    super(props);

    this.state = {
      subjectName: '',
    };
  }

  handleChange = (e) => {
    this.setState({
      subjectName: e.target.value,
    });
  };

  render() {
    return (
      <div className={this.props.classes.root}>
        <form className={this.props.classes.form} noValidate autoComplete="off">
          <TextField
            label="Име на предмет"
            type="text"
            margin="normal"
            onChange={this.handleChange}
          />
          <PrimaryButton
            onClick={(e) => {
              e.preventDefault();
              this.props.handleAdd(this.state.subjectName);
            }}
            content="Добави"
          />
        </form>
        <List>
          {this.props.subjects.map(value => (
            <ListItem key={value} dense className={this.props.classes.listItem}>
              <ListItemText primary={value} />
              <ListItemSecondaryAction>
                <IconButton
                  onClick={(e) => {
                    e.preventDefault();
                    this.props.handleRemove(value);
                  }}
                >
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
