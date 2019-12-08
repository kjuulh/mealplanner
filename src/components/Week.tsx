import React from 'react';
import { useHistory } from 'react-router';
import { createStyles, Typography, makeStyles, Theme } from '@material-ui/core';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    week: {
      height: '100%',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
    },
    weekText: {
      fontSize: 24,
      fontWeight: 700,
    },
  }),
);

type WeekProps = {
  week: number;
};

const Week: React.FC<WeekProps> = (props) => {
  const classes = useStyles();
  const history = useHistory();

  return (
    <div
      className={classes.week}
      onClick={() => history.push('/week/' + props.week)}
    >
      <Typography className={classes.weekText}>{props.week}</Typography>
    </div>
  );
};

export default Week;
