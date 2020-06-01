import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from '../pages/Home';
import Petitions from '../pages/Petitions';
import Nav from '../components/nav';

const AppRoutes = () => (
  <>
    <Nav />
    <Switch>
      <Route path="/" component={Home} exact />
      <Route path="/petitions" component={Petitions} exact />
    </Switch>
  </>
);

export default AppRoutes;
