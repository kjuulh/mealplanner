import React from 'react';
import { mealPlanService, WeekPlan } from '../services/MealPlanService';
import { Typography } from '@material-ui/core';

const MealPlan: React.FC<{ week: number }> = (props) => {
  const mealPlan = mealPlanService.mealPlan(props.week);

  if (typeof mealPlan !== 'undefined') {
    return (
      <>
        <Typography>Week: {mealPlan.week}</Typography>
        <dl>
          {mealPlan.plans.map((plan, index) => (
            <>
              <dt key={index}>
                <Typography variant='caption'>
                  {plan.day.toUpperCase()}
                </Typography>
              </dt>
              <dd style={{ marginBottom: 10 }}>{plan.meal}</dd>
            </>
          ))}
        </dl>
      </>
    );
  } else {
    return (
      <>
        <Typography>Week: {props.week}</Typography>
        <Typography variant='h5'>No mealplan found</Typography>
      </>
    );
  }
};

export default MealPlan;
