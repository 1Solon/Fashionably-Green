import React from 'react';
import Typography from '@mui/material/Typography';
import { Card, CardContent, LinearProgress, Step, StepLabel, Stepper } from '@mui/material';
import Box from '@mui/system/Box';

export default function Content() {
  const [level] = React.useState(5);
  const [progress] = React.useState(30);

  // Generate a list of steps based on the current level plus 5 future levels
  const steps = Array.from({ length: level + 5 }, (_, i) => `Level ${i + 1}`);

  return (
    <Card>
      <CardContent>
        <Box display="flex" flexDirection="column" alignItems="center" justifyContent="center">
          <Box sx={{ width: '100%' }}>
            <Stepper activeStep={level - 1} alternativeLabel>
              {steps.map((label) => (
                <Step key={label}>
                  <StepLabel>{label}</StepLabel>
                </Step>
              ))}
            </Stepper>
          </Box>
          <br />
          <Typography variant="subtitle1" gutterBottom >
            Progress to next EcoLevel:
          </Typography>
          <Box sx={{ width: '92%' }}>
            <LinearProgress variant="determinate" value={progress} />
          </Box>
        </Box>
      </CardContent>
    </Card>
  );
}