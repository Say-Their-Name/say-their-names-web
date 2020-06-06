import ReactGA from 'react-ga';

import config from './config';

const { gaTrackingId, isDevelopment, isTest } = config;

export const initializeGA = () => {
  ReactGA.initialize(gaTrackingId, { debug: isDevelopment, testMode: isTest });
};

export const trackInitialPageView = (pathname) => {
  ReactGA.pageview(pathname);
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
