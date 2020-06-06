import React from 'react';

import Routes from './routes';
import useTracking from './hooks/useTracking';

const App = () => {
  useTracking();

  return (
    <div className="App">
      <Routes />
    </div>
  );
};

export default App;
