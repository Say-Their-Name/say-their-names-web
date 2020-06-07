import React from 'react';
import { render } from '@testing-library/react';
import { Router } from 'react-router-dom';
import { createMemoryHistory } from 'history';
import App from './App';

test('renders Home Page', () => {
  const history = createMemoryHistory();
  history.push('/');

  const { getByText } = render(
    <Router history={history}>
      <App />
    </Router>
  );

  expect(getByText(/Delayed justice is injustice/i)).toBeInTheDocument();
});
