import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import GetAchievement from './GetAchievement';

const useStyles = makeStyles(theme => ({
  root: {
    width: '100%',
    marginTop: 200
  },
  button: {
    marginRight: theme.spacing(1),
  },
  instructions: {
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(1),
  }
}));

export default function Archievements() {
  const URLPath = "/api/achievements";
  const classes = useStyles();
  const [activeStep, setActiveStep] = React.useState(0);
  const [skipped, setSkipped] = React.useState(new Set());
  const [achievement, setAchievement] = useState();

  useEffect(() => {
    const FetchData = async () => {
      const res = await fetch(URLPath);
      const json = await res.json();
      setAchievement(json);
    };
    FetchData();
  }, [URLPath]);

  const isStepSkipped = step => {
    return skipped.has(step);
  };

  const handleNext = () => {
    let newSkipped = skipped;
    if (isStepSkipped(activeStep)) {
      newSkipped = new Set(newSkipped.values());
      newSkipped.delete(activeStep);
    }

    setActiveStep(prevActiveStep => prevActiveStep + 1);
    setSkipped(newSkipped);
  };

  const handleBack = () => {
    setActiveStep(prevActiveStep => prevActiveStep - 1);
  };

  const handleReset = () => {
    setActiveStep(0);
  };

  return (
    <div className={classes.root}>
      {achievement && <Container maxWidth="md">
        <Stepper activeStep={activeStep}>
          {achievement.map((item, index) => {
            const stepProps = {};
            const labelProps = {};
            if (isStepSkipped(index)) {
              stepProps.completed = false;
            }
            return (
              <Step key={index} {...stepProps}>
                <StepLabel {...labelProps}><h4>{item.company_name}</h4></StepLabel>
              </Step>
            );
          })}
        </Stepper>
        <div>
          {activeStep === achievement.length ? (
            <div>
              <Typography className={classes.instructions}>
                <h4> Eagerly Waiting for NEW Archievements... </h4>
              </Typography>
              <Button onClick={handleReset} className={classes.button}>
                <h4>Reset</h4>
              </Button>
            </div>
          ) : (
              <div>
                <Typography className={classes.instructions}>
                  <GetAchievement achievementInfo={achievement[activeStep]} />
                </Typography>
                <div>
                  <Button disabled={activeStep === 0} onClick={handleBack} className={classes.button}>
                    Back
              </Button>
                  <Button
                    variant="contained"
                    color="primary"
                    onClick={handleNext}
                    className={classes.button}
                  >
                    {activeStep === achievement.length - 1 ? 'Finish' : 'Next'}
                  </Button>
                </div>
              </div>
            )}
        </div>
      </Container>}
    </div>
  );
}
