import React, { useEffect } from 'react';
import { Switch, Route, useLocation } from 'react-router-dom';
import PropTypes from 'prop-types';
import ErrorBoundary from '../components/common/ErrorBoundary';
import Home from '../pages/Home';
import About from '../pages/AboutPage';
import Petitions from '../pages/Petitions';
import ProfileDetail from '../pages/ProfileDetail';
import AboutMobile from '../components/about/About';
import Navigation from '../components/navigation/Navigation';
import Footer from '../components/footer/Footer';
import Donations from '../pages/Donations';
import NotFound from '../pages/notFound/NotFound';
import DonationDetail from '../pages/DonationDetail';
import PetitionDetail from '../pages/PetitionDetail';
import PrivacyPolicy from '../pages/PrivacyPolicy';
import TermsOfService from '../pages/TermsOfService';

import { trackInitialPageView } from '../utils/gaTracker';

const AppRoutes = (props) => {
  const { initialLoadProp, setInitialLoadProp } = props;
  const location = useLocation();

  useEffect(() => {
    if (!initialLoadProp) {
      setInitialLoadProp();
      trackInitialPageView(location.pathname);
    }
  });

  if (location.pathname === '/about-mobile') {
    return (
      <>
        <Switch>
          <Route path="/about-mobile" component={AboutMobile} exact />
        </Switch>
      </>
    );
  }
  return (
    <>
      <Navigation />
      <ErrorBoundary key={location.pathname}>
        <Switch>
          <Route path="/" component={Home} exact />
          <Route path="/about" component={About} exact />
          <Route path="/profile/:id" component={ProfileDetail} exact />
          <Route path="/petitions" component={Petitions} exact />
          <Route path="/donations" component={Donations} exact />
          <Route path="/donate/:id" component={DonationDetail} exact />
          <Route path="/sign/:id" component={PetitionDetail} exact />
          <Route path="/privacy" component={PrivacyPolicy} exact />
          <Route path="/terms" component={TermsOfService} exact />
          <Route path="*" component={NotFound} exact />
        </Switch>
      </ErrorBoundary>
      <Footer />
    </>
  );
};

AppRoutes.propTypes = {
  initialLoadProp: PropTypes.bool.isRequired,
  setInitialLoadProp: PropTypes.func.isRequired
};

export default AppRoutes;
