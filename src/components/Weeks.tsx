import React from 'react';
import Week from './Week';
import { createStyles, Theme } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import moment from 'moment';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    weeks: {
      display: 'grid',
      gridTemplateColumns: 'repeat(5, 1fr)',
    },
    week: {
      height: 75,
      transition: 'all 400ms',

      '&:hover': {
        boxShadow: '1px 1px 10px rgba(0,0,0,0.25)',
      },

      '&:active': {
        boxShadow: '1px 1px 4px rgba(0,0,0,0.25)',
      },
    },
    currentWeek: {
      backgroundColor: 'rgba(200,0,200,0.3)',
      color: '#fff',
      height: 75,
      transition: 'all 400ms',

      '&:hover': {
        boxShadow: '1px 1px 10px rgba(0,0,0,0.25)',
      },

      '&:active': {
        boxShadow: '1px 1px 4px rgba(0,0,0,0.25)',
      },
    },
  }),
);

const Weeks = () => {
  const classes = useStyles();
  const cells: number[] = [];
  for (let i = 1; i <= 52; i++) {
    cells.push(i);
  }

  const currentWeek = Number.parseInt(moment().format('w'));

  return (
    <div className={classes.weeks}>
      {cells.map((cell, index) => (
        <div
          key={index}
          className={currentWeek !== cell ? classes.week : classes.currentWeek}
        >
          <Week week={cell} />
        </div>
      ))}
    </div>
  );
};

export default Weeks;
