import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';

import App from './App';
import GlobalStyle from './styles';
import ScrollToTop from './components/common/ScrollToTop';
import * as serviceWorker from './serviceWorker';

const app = (
  <React.StrictMode>
    <Router>
      <GlobalStyle whiteColor />
      <ScrollToTop />
      <App />
    </Router>
  </React.StrictMode>
);

const rootElement = document.getElementById('root');
if (rootElement.hasChildNodes()) {
  ReactDOM.hydrate(app, rootElement);
} else {
  ReactDOM.render(app, rootElement);
}

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
