import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import { RouteComponentProps } from 'react-router';
import { mealPlanService, WeekPlan } from '../services/MealPlanService';
import MealPlan from '../components/MealPlan';

const WeekPage: React.FC<RouteComponentProps<{ week: string }>> = (props) => {
  const week = Number.parseInt(props.match.params.week);

  return (
    <div id='week'>
      <Container maxWidth='sm'>
        <MealPlan week={week} />
      </Container>
    </div>
  );
};

export default WeekPage;
