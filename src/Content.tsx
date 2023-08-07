import React from 'react';
import Typography from '@mui/material/Typography';
import { Badge, Button, Card, CardActionArea, CardActions, CardContent, CardMedia, LinearProgress, LinearProgressProps, Paper, Step, StepLabel, Stepper } from '@mui/material';
import Box from '@mui/system/Box';
import { Stack } from '@mui/system';
import SellIcon from '@mui/icons-material/Sell';
import pronote from './assets/pronote.svg';
import iherb from './assets/herb.svg';

function LinearProgressWithLabel(props: LinearProgressProps & { value: number }) {
  return (
    <Box sx={{ display: 'flex', alignItems: 'center' }}>
      <Box sx={{ width: '100%', mr: 1 }}>
        <LinearProgress variant="determinate" {...props} />
      </Box>
      <Box sx={{ minWidth: 35 }}>
        <Typography variant="body2" color="text.secondary">{`${Math.round(
          props.value,
        )}%`}</Typography>
      </Box>
    </Box>
  );
}

export default function Content() {
  const [level] = React.useState(5);
  const [progress] = React.useState(30);

  // Generate a list of steps based on the current level plus 5 future levels
  const steps = Array.from({ length: level + 5 }, (_, i) => `Level ${i + 1}`);

  return (
    <Stack spacing={2}>
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
            <Typography variant="subtitle1" gutterBottom>
              €500 to next EcoLevel:
            </Typography>
            <Box sx={{ width: '92%' }}>
              <LinearProgress variant="determinate" value={progress} />
            </Box>
          </Box>
        </CardContent>
      </Card>

      <Card>
        <CardContent>
          <Paper elevation={0} />
          <Stack spacing={1}>
            <Card sx={{}}>
              <CardActionArea>
                <CardMedia>
                  <img src={iherb} alt="logo" style={{ maxWidth: '100%', height: '100%' }} />
                </CardMedia>
                <CardContent>
                  <Stack spacing={1}>
                    <Typography gutterBottom variant="h5" component="div">
                      iHerb
                    </Typography>
                    <Box sx={{ width: '92%' }}>
                      <LinearProgressWithLabel value={10} />
                    </Box>
                    <br />
                    <Box>
                      <Badge color="secondary" badgeContent={1}>
                        <SellIcon />
                      </Badge>
                      <Typography gutterBottom variant="h6" component="span">
                        { /* This is so god awful, but I can't figure out how to get the badge to align right */}
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;You have a coupon!
                      </Typography>
                      <Typography variant="subtitle1" gutterBottom>
                        Store coupon is 5%, but thanks to your EcoLevel you're getting
                        <Typography variant="subtitle1" color="primary" component="span">
                          &nbsp;10%&nbsp;
                        </Typography>
                        Off!
                      </Typography>
                      <CardActions>
                        <Button size="medium" variant="contained">Redeem</Button>
                      </CardActions>
                    </Box>
                  </Stack>
                </CardContent>
              </CardActionArea>
            </Card>
          </Stack>
          <Paper />
        </CardContent>
      </Card>

      <Card>
        <CardContent>
          <Paper elevation={0} />
          <Stack spacing={1}>
            <Card sx={{}}>
              <CardActionArea>
                <CardMedia>
                  <img src={pronote} alt="logo" style={{ maxWidth: '100%', height: '100%' }} />
                </CardMedia>

                <CardContent>
                  <Stack spacing={1}>
                    <Typography gutterBottom variant="h5" component="div">
                      Pronote
                    </Typography>
                    <Box sx={{ width: '92%' }}>
                      <LinearProgressWithLabel value={77} />
                    </Box>
                    <br />
                    <Box>
                      <Badge color="secondary" badgeContent={0}>
                        <SellIcon />
                      </Badge>
                      <Typography gutterBottom variant="h6" component="span">
                        { /* This is so god awful, but I can't figure out how to get the badge to align right */}
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;€60 to next coupon!
                      </Typography>
                      <Typography variant="subtitle1" gutterBottom>
                        Store coupon is 10%, but thanks to your EcoLevel you're getting
                        <Typography variant="subtitle1" color="primary" component="span">
                          &nbsp;15%&nbsp;
                        </Typography>
                        Off!
                      </Typography>
                    </Box>
                  </Stack>
                </CardContent>
              </CardActionArea>
            </Card>
          </Stack>
          <Paper />
        </CardContent>
      </Card>





    </Stack>
  );
}