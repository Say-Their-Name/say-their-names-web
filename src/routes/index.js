import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from '../pages/Home';
import Petitions from '../pages/Petitions';
import About from '../pages/about/About';
import ProfileDetail from '../pages/ProfileDetail';
import Navigation from '../components/navigation/Navigation';
import Footer from '../components/footer/Footer';

const AppRoutes = () => (
  <>
    <Navigation />
    <Switch>
      <Route path="/" component={Home} exact />
      <Route path="/about" component={About} exact />
      <Route path="/profile/:id" component={ProfileDetail} exact />
      <Route path="/petitions" component={Petitions} exact />
    </Switch>
    <Footer />
  </>
);

export default AppRoutes;
