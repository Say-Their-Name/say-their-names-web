import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { Router } from 'react-router-dom';
import { createMemoryHistory } from 'history';

import Navigation from './Navigation';

describe('<Navigation />', () => {
  test('renders Navigation', () => {
    const history = createMemoryHistory();

    const { getByText, getByAltText } = render(
      <Router history={history}>
        <Navigation />
      </Router>
    );

    expect(getByText('SAY THEIR NAMES'));
    expect(getByAltText('Say Their Names Logo'));

    expect(getByText('Home'));
    expect(getByText('Donations'));
    expect(getByText('Petitions'));
    expect(getByText('About'));
  });

  test('renders correct links', () => {
    const history = createMemoryHistory();

    const { getByText } = render(
      <Router history={history}>
        <Navigation />
      </Router>
    );

    fireEvent.click(getByText('Home'));
    expect(history.location.pathname).toBe('/');

    fireEvent.click(getByText('Donations'));
    expect(history.location.pathname).toBe('/donations');

    fireEvent.click(getByText('Petitions'));
    expect(history.location.pathname).toBe('/petitions');

    fireEvent.click(getByText('About'));
    expect(history.location.pathname).toBe('/about');
  });
});
