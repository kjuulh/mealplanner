import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import WeekPage from './pages/WeekPage';
import HomePage from './pages/HomePage';
import Navbar from './components/Navbar';
import WeeksPage from './pages/WeeksPage';
import CurrentWeekPage from './pages/CurrentWeekPage';

function App() {
  return (
    <BrowserRouter basename={'mealplanner'}>
      <div style={{ marginBottom: 40 }}>
        <Navbar />
      </div>
      <Switch>
        <Route path='/week/:week' component={WeekPage}></Route>
        <Route path='/weeks' component={WeeksPage}></Route>
        <Route path='/current-week' component={CurrentWeekPage}></Route>
        <Route path='/*' component={HomePage}></Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
