import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { Router } from 'react-router-dom';
import { createMemoryHistory } from 'history';

import Footer from './Footer';

describe('<Footer />', () => {
  test('renders Footer', () => {
    const history = createMemoryHistory();

    const { getByText } = render(
      <Router history={history}>
        <Footer />
      </Router>
    );

    expect(getByText('LINKS'));
    expect(getByText('Home'));
    expect(getByText('Donations'));
    expect(getByText('Petitions'));
    expect(getByText('Privacy Policy'));
    expect(getByText('Terms Of Service'));
    expect(getByText('Our Mission'));
    expect(getByText('DOWNLOADS'));
    expect(getByText('JOIN US ON SOCIAL MEDIA'));
  });

  test('renders correct links', () => {
    const history = createMemoryHistory();

    const { getByText } = render(
      <Router history={history}>
        <Footer />
      </Router>
    );

    fireEvent.click(getByText('Home'));
    expect(history.location.pathname).toBe('/');

    fireEvent.click(getByText('Donations'));
    expect(history.location.pathname).toBe('/donations');

    fireEvent.click(getByText('Petitions'));
    expect(history.location.pathname).toBe('/petitions');

    fireEvent.click(getByText('Privacy Policy'));
    expect(history.location.pathname).toBe('/privacy');

    fireEvent.click(getByText('Terms Of Service'));
    expect(history.location.pathname).toBe('/terms');
  });
});
