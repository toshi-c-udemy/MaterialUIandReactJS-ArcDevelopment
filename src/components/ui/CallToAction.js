import React from 'react';
import { Grid, Typography, makeStyles, Button, useTheme } from '@material-ui/core';

import ButtonArrow from './ButtonArrow';

const useStyle = makeStyles((theme) => ({
  learnButtonHero: {
    ...theme.typography.learnButton,
    fontSize: '0.9rem',
    height: 45,
    width: 145,
  },
}));

export default function CallToAction() {
  const classes = useStyle();
  const theme = useTheme();

  return (
    <Grid container>
      <Grid item>
        <Grid container direction='column'>
          <Grid item>
            <Typography variant='h2'>
              Simple Software.
              <br />
              Revolutionary Results.
            </Typography>
            <Typography variant='subtitle2'>Take advantage of the 21st Century.</Typography>
            <Grid container item>
              <Button variant='outlined' className={classes.learnButtonHero}>
                <span style={{ marginRight: 5 }}>Learn More</span>
                <ButtonArrow width={10} height={10} fill={theme.palette.common.blue} />
              </Button>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
}
