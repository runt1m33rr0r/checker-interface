import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import MobileStepper from 'material-ui/MobileStepper';
import Button from 'material-ui/Button';
import Typography from 'material-ui/Typography';
import KeyboardArrowLeft from 'material-ui-icons/KeyboardArrowLeft';
import KeyboardArrowRight from 'material-ui-icons/KeyboardArrowRight';

import SchoolTypeChooser from '../SchoolType';
import SubjectsCreator from '../SubjectsCreator';
import TimeslotCreator from '../TimeslotCreator';
import GroupList from '../GroupList';
import styles from './styles';

class Wizard extends Component {
  constructor(props) {
    super(props);

    this.state = {
      activeStep: 0,
      stepsCount: 4,
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

  getStepContent = (step) => {
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
  };

  render = () => {
    const { classes, theme, isReady } = this.props;

    const isLastStep = this.state.activeStep === this.state.stepsCount - 1;
    if (this.props.setupFinished === false) {
      return (
        <div className={classes.wizard}>
          {this.getStepContent(this.state.activeStep)}
          <MobileStepper
            className={classes.root}
            variant="dots"
            steps={this.state.stepsCount}
            position="bottom"
            activeStep={this.state.activeStep}
            nextButton={
              <Button
                size="small"
                onClick={isLastStep ? this.props.handleFinish : this.handleNext}
                disabled={
                  this.state.activeStep === this.state.stepsCount || (!isReady && isLastStep)
                }
              >
                {isLastStep ? 'Готово' : 'Напред'}
                {theme.direction === 'rtl' ? <KeyboardArrowLeft /> : <KeyboardArrowRight />}
              </Button>
            }
            backButton={
              <Button size="small" onClick={this.handleBack} disabled={this.state.activeStep === 0}>
                {theme.direction === 'rtl' ? <KeyboardArrowRight /> : <KeyboardArrowLeft />}
                Назад
              </Button>
            }
          />
        </div>
      );
    }
    return (
      <div className={classes.wizard}>
        <div className={classes.finished}>
          <Typography variant="display3">Настройката е направена!</Typography>
          <Button variant="raised" size="large" color="primary" onClick={this.props.handleReset}>
            Пренастрой
          </Button>
        </div>
      </div>
    );
  };
}

Wizard.propTypes = {
  classes: PropTypes.object.isRequired,
  theme: PropTypes.object.isRequired,
  handleFinish: PropTypes.func.isRequired,
  isReady: PropTypes.bool.isRequired,
  setupFinished: PropTypes.bool.isRequired,
  handleReset: PropTypes.func.isRequired,
};

export default withStyles(styles, { withTheme: true })(Wizard);
