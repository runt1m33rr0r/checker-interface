import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import Stepper, { Step, StepLabel, StepContent } from 'material-ui/Stepper';
import Button from 'material-ui/Button';
import Paper from 'material-ui/Paper';
import Typography from 'material-ui/Typography';

import SchoolTypeChooser from '../SchoolType';
import SubjectsCreator from '../SubjectsCreator';
import TimeslotCreator from '../TimeslotCreator';
import GroupList from '../GroupList';
import styles from './styles';

class VerticalLinearStepper extends Component {
  constructor(props) {
    super(props);

    this.state = {
      activeStep: 0,
    };
  }

  handleNext = () => {
    this.setState({
      activeStep: this.state.activeStep + 1,
    });
  };

  handleBack = () => {
    this.setState({
      activeStep: this.state.activeStep - 1,
    });
  };

  handleReset = () => {
    this.setState({
      activeStep: 0,
    });
  };

  getSteps() {
    return ['Вид училище', 'Предмети', 'Часови диапазони', 'Паралелки'];
  }

  getStepContent(step) {
    switch (step) {
      case 0:
        return <SchoolTypeChooser />;
      case 1:
        return <SubjectsCreator />;
      case 2:
        return <TimeslotCreator />;
      case 3:
        return <GroupList />;
      default:
        return 'Непозната стъпка';
    }
  }

  render() {
    const { classes } = this.props;
    const steps = this.getSteps();
    const { activeStep } = this.state;

    return (
      <div className={classes.root}>
        <Stepper activeStep={activeStep} orientation="vertical">
          {steps.map((label, index) => (
            <Step key={label}>
              <StepLabel>{label}</StepLabel>
              <StepContent>
                {this.getStepContent(index)}
                <div className={classes.actionsContainer}>
                  <div>
                    <Button
                      disabled={activeStep === 0}
                      onClick={this.handleBack}
                      className={classes.button}
                    >
                      Назад
                    </Button>
                    <Button
                      raised
                      color="primary"
                      onClick={this.handleNext}
                      className={classes.button}
                    >
                      {activeStep === steps.length - 1 ? 'Приключи' : 'Напред'}
                    </Button>
                  </div>
                </div>
              </StepContent>
            </Step>
          ))}
        </Stepper>
        {activeStep === steps.length && (
          <Paper square elevation={0} className={classes.resetContainer}>
            <Typography>Всичко е настроено!</Typography>
            <Button onClick={this.handleReset} className={classes.button}>
              Изчисти
            </Button>
          </Paper>
        )}
      </div>
    );
  }
}

VerticalLinearStepper.propTypes = {
  classes: PropTypes.object,
};

export default withStyles(styles)(VerticalLinearStepper);
