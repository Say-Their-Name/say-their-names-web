import ReactGA from 'react-ga';

import config from './config';

const { gaTrackingId, isDevelopment } = config;

export const initializeGA = () => {
  ReactGA.initialize(gaTrackingId, { debug: isDevelopment });
};

export const trackPageView = (history, options = {}) => {
  history.listen((location) => {
    const { pathname } = location || window.location;
    ReactGA.set({ page: pathname, ...options });
    ReactGA.pageview(pathname);
  });
};

export const trackEvent = (category, action, label) => {
  ReactGA.event({
    category,
    action,
    label
  });
};

export default {
  initializeGA,
  trackPageView
};
