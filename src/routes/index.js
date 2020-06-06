import React from 'react';
import { Switch, Route, useLocation } from 'react-router-dom';

import ErrorBoundry from '../components/common/ErrorBoundry';
import Home from '../pages/Home';
import About from '../pages/about/About';
import Petitions from '../pages/Petitions';
import ProfileDetail from '../pages/ProfileDetail';
import Navigation from '../components/navigation/Navigation';
import Footer from '../components/footer/Footer';
import Donations from '../pages/Donations';
import NotFound from '../pages/notFound/NotFound';
import DonationDetail from '../pages/DonationDetail';

const AppRoutes = () => {
  const location = useLocation();
  return (
    <>
      <Navigation />
      <ErrorBoundry key={location.pathname}>
        <Switch>
          <Route path="/" component={Home} exact />
          <Route path="/about" component={About} exact />
          <Route path="/profile/:id" component={ProfileDetail} exact />
          <Route path="/petitions" component={Petitions} exact />
          <Route path="/donations/:identifier?" component={Donations} exact />
          <Route path="/donate/:id" component={DonationDetail} exact />
          <Route path="*" component={NotFound} exact />
        </Switch>
      </ErrorBoundry>
      <Footer />
    </>
  );
};

export default AppRoutes;
