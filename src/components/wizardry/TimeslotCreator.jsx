import React, { Component } from 'react';
import TextField from 'material-ui/TextField';
import PropTypes from 'prop-types';
import List, { ListItem, ListItemSecondaryAction, ListItemText } from 'material-ui/List';
import IconButton from 'material-ui/IconButton';
import DeleteIcon from 'material-ui-icons/Delete';
import classNames from 'classnames';
import { withStyles } from 'material-ui/styles';

import PrimaryButton from '../common/PrimaryButton';

const styles = () => ({
  root: {
    width: '100%',
    maxWidth: 360,
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    alignContent: 'center',
  },
  pickers: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    alignContent: 'center',
    paddingBottom: '10px',
  },
});

class TimeslotCreator extends Component {
  constructor(props) {
    super(props);

    this.state = {
      from: '00:00',
      to: '00:00',
    };
  }

  handleChangeFrom = (e) => {
    this.setState({
      from: e.target.value,
    });
  };

  handleChangeTo = (e) => {
    this.setState({
      to: e.target.value,
    });
  };

  render() {
    const { classes } = this.props;

    return (
      <div className={classes.root}>
        <form className={classes.form} noValidate autoComplete="off">
          <div className={classes.pickers}>
            <TextField
              id="time"
              label="От"
              type="time"
              defaultValue="01:00"
              className={classes.textField}
              onChange={this.handleChangeFrom}
            />
            <TextField
              id="time"
              label="До"
              type="time"
              defaultValue="01:00"
              className={classes.textField}
              onChange={this.handleChangeTo}
            />
          </div>
          <PrimaryButton
            onClick={(e) => {
              e.preventDefault();
              this.props.handleAdd(`От ${this.state.from} до ${this.state.to}`);
            }}
            content="Добави"
          />
        </form>
        <List>
          {this.props.timeslots.map(value => (
            <ListItem key={value} dense className={classes.listItem}>
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

TimeslotCreator.propTypes = {
  handleAdd: PropTypes.func.isRequired,
  handleRemove: PropTypes.func.isRequired,
  timeslots: PropTypes.array.isRequired,
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(TimeslotCreator);
