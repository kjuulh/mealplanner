import React from 'react';
import { CssBaseline, Container } from '@material-ui/core';
import Weeks from '../components/Weeks';

const WeeksPage = () => {
  return (
    <div>
      <CssBaseline></CssBaseline>
      <Container maxWidth='md'>
        <Weeks></Weeks>
      </Container>
    </div>
  );
};

export default WeeksPage;
