import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';

import Routes from './routes/index';
import { trackPageView, initializeGA } from './utils/gaTracker';

initializeGA();

const App = () => {
  const [initialLoad, setInitialLoad] = useState(false);
  const history = useHistory();

  useEffect(() => {
    trackPageView(history);
  }, [history]);

  return (
    <main className="App">
      <Routes
        initialLoadProp={initialLoad}
        setInitialLoadProp={() => setInitialLoad(true)}
      />
    </main>
  );
};

export default App;
