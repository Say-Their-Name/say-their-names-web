import React from 'react';
import { Switch, Route } from 'react-router-dom';

import ErrorBoundry from '../components/common/ErrorBoundry';
import Home from '../pages/Home';
import About from '../pages/about/About';
import Petitions from '../pages/Petitions';
import ProfileDetail from '../pages/ProfileDetail';
import Navigation from '../components/navigation/Navigation';
import Footer from '../components/footer/Footer';
import Donations from '../pages/Donations';
import NotFound from '../pages/notFound/NotFound';

const AppRoutes = () => (
  <>
    <Navigation />
    <ErrorBoundry>
      <Switch>
        <Route path="/" component={Home} exact />
        <Route path="/about" component={About} exact />
        <Route path="/profile/:id" component={ProfileDetail} exact />
        <Route path="/petitions" component={Petitions} exact />
        <Route path="/donations/:id" component={Donations} exact />
        <Route path="/donations" component={Donations} exact />
        <Route path="*" component={NotFound} exact />
      </Switch>
    </ErrorBoundry>
    <Footer />
  </>
);

export default AppRoutes;
