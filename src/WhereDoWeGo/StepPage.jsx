import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import StepContent from '@material-ui/core/StepContent';
import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
  },
  button: {
    marginTop: theme.spacing(1),
    marginRight: theme.spacing(1),
  },
  actionsContainer: {
    marginBottom: theme.spacing(2),
  },
  resetContainer: {
    padding: theme.spacing(3),
  },
}));

export const StepPage = ({children, done, failed = [], onChange = (_) => {}, onReset = () => {}}) => {
  const classes = useStyles();
  const [activeStep, setActiveStep] = React.useState(5);
  const arrayChild = React.Children.toArray(children);
  const steps = arrayChild.map(child => child.props?.title ?? "")
  const stepsCode = arrayChild.map(child => child.props?.code)

  const handleNext = () => {
    setActiveStep((prevActiveStep) => {
      onChange(stepsCode[prevActiveStep + 1])
      return prevActiveStep + 1
    });
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => {
      onChange(stepsCode[prevActiveStep - 1])
      return prevActiveStep - 1
    });
  };

  const handleReset = () => {
    setActiveStep(0);
    onChange(stepsCode[0])
    onReset()
  };

  return (
    <div className={classes.root}>
      <Stepper activeStep={activeStep} orientation="vertical">
        {steps.map((label, index) => (
          <Step key={label}>
            <StepLabel error={failed.includes(stepsCode[index])}>{label}</StepLabel>
            <StepContent>
              <Typography>{arrayChild[index]}</Typography>
              <div className={classes.actionsContainer}>
                <div>
                  <Button
                    disabled={activeStep === 0}
                    onClick={handleBack}
                    className={classes.button}
                  >
                    Back
                  </Button>
                  <Button
                    variant="contained"
                    color="primary"
                    onClick={handleNext}
                    className={classes.button}
                  >
                    {activeStep === steps.length - 1 ? 'Finish' : 'Next'}
                  </Button>
                </div>
              </div>
            </StepContent>
          </Step>
        ))}
      </Stepper>
      {activeStep === steps.length && (
        <>
        <div>{done}</div>
        <Button onClick={handleReset} className={classes.button}>
            Reset
        </Button>
        </>
      )}
    </div>
  );
}