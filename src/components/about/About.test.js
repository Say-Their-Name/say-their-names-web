import React from 'react';
import { render } from '@testing-library/react';
import { Router } from 'react-router-dom';
import { createMemoryHistory } from 'history';

import About from './About';

test('renders About Page', () => {
  const history = createMemoryHistory();
  history.push('/');

  const { getByText } = render(
    <Router history={history}>
      <About />
    </Router>
  );

  expect(getByText(/About this project/i)).toBeInTheDocument();
});
