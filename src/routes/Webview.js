import React from 'react';
import { Switch, Route } from 'react-router-dom';

import AboutWeb from '../components/about/About';
import NotFound from '../pages/notFound/NotFound';

const WebView = () => (

  <>

    <Switch>
      <Route path="/about-mobile" component={AboutWeb} exact />
      <Route path="*" component={NotFound} exact />
    </Switch>

  </>

);


export default WebView;
