import React from 'react';
import { CssBaseline, Container } from '@material-ui/core';
import moment from 'moment';
import MealPlan from '../components/MealPlan';

const CurrentWeekPage = () => {
  const currentWeek = Number.parseInt(moment().format('w'));

  return (
    <>
      <CssBaseline></CssBaseline>
      <Container maxWidth='xs'>
        <MealPlan week={currentWeek} />
      </Container>
    </>
  );
};

export default CurrentWeekPage;
