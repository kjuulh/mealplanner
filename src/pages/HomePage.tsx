import React from 'react';
import {
  CssBaseline,
  Container,
  GridList,
  GridListTile,
  Typography,
  createStyles,
  makeStyles,
  Theme,
  Grid,
} from '@material-ui/core';
import Week from '../components/Week';
import Weeks from '../components/Weeks';

import moment from 'moment';
import MealPlan from '../components/MealPlan';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    divider: {
      width: '100%',
      height: 1,
      backgroundColor: '#333',
    },
  }),
);

const HomePage = () => {
  const classes = useStyles();

  const currentWeek = Number.parseInt(moment().format('w'));

  return (
    <>
      <CssBaseline />
      <Container maxWidth='md'>
        <Grid container direction='row'>
          <Grid item md={6} xs={12}>
            <MealPlan week={currentWeek} />
          </Grid>
          <Grid item md={6} xs={12}>
            <MealPlan week={currentWeek + 1} />
          </Grid>
        </Grid>
        <div className={classes.divider}></div>
        <Weeks></Weeks>
      </Container>
    </>
  );
};

export default HomePage;
