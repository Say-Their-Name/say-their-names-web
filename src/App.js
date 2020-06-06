import React, { useEffect } from 'react';

import { useHistory } from 'react-router-dom';
import Routes from './routes';
import { trackPageView, initializeGA } from './utils/gaTracker';

const App = () => {
  const history = useHistory();
  initializeGA();

  useEffect(() => {
    trackPageView(history);
  }, [history]);

  return (
    <div className="App">
      <Routes />
    </div>
  );
};

export default App;
