import React from 'react';
import { render } from '@testing-library/react';
import { Router } from 'react-router-dom';
import { createMemoryHistory } from 'history';
import Home from './Home';

test('renders Home Page', () => {
  const history = createMemoryHistory();
  history.push('/');

  const { getByText } = render(
    <Router history={history}>
      <Home />
    </Router>
  );

  expect(getByText(/Delayed justice is injustice/i)).toBeInTheDocument();
});
