import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { Router } from 'react-router-dom';
import { createMemoryHistory } from 'history';

import { full_name, donation_links } from './PersonProfile';

describe('Full Name', () => {
  test('returns full_name', () => {
    const history = createMemoryHistory();

    const { getByText } = render(
      <Router history={history}>
        { full_name }
      </Router>
    );

  });

  test('renders correct information', () => {
    const history = createMemoryHistory();

    const { getByText } = render(
      <Router history={history}>
        { full_name }
      </Router>
    );


  });
});

describe('Donation Links', () => {
  test('renders PersonSection', () => {
    const history = createMemoryHistory();

    const { getByText } = render(
      <Router history={history}>
        { full_name }
      </Router>
    );

  });

  test('renders correct information', () => {
    const history = createMemoryHistory();

    const { getByText } = render(
      <Router history={history}>
        { full_name }
      </Router>
    );

    fireEvent.click(getByText('DONATE'));
    expect(history.location.pathname).toBe('/donations/{full_name}');

  });
});
