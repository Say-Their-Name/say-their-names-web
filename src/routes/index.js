import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from '../pages/Home';
import Nav from '../components/nav';

const AppRoutes = () => (
  <>
    <Nav />
    <Switch>
      <Route path="/" component={Home} exact />
    </Switch>
  </>
);

export default AppRoutes;
