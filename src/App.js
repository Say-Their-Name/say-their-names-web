import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';

import Routes from './routes/index';
import Seo from './components/common/Seo'
import { trackPageView, initializeGA } from './utils/gaTracker';

initializeGA();

const App = () => {
  const [initialLoad, setInitialLoad] = useState(false);
  const history = useHistory();

  useEffect(() => {
    trackPageView(history);
  }, [history]);

  return (
    <div className="App">
      <Seo
        title="Home"
        image="https://say-their-names.fra1.cdn.digitaloceanspaces.com/assets/stn-logo.png"
        description="Our aim is to build an open-source platform that raises awareness of the injustice and often forgotten names of racial inequality"
      />
      <Routes initialLoadProp={initialLoad} setInitialLoadProp={() => setInitialLoad(true)} />
    </div>
  );
};

export default App;
