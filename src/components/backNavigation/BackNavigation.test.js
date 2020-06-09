import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { Router } from 'react-router-dom';
import { createMemoryHistory } from 'history';

import BackNavigation from './BackNavigation';

describe('<BackNavigation />', () => {
  test('renders BackNavigation', () => {
    const history = createMemoryHistory();

    const { getByText } = render(
      <Router history={history}>
        <BackNavigation
          text="text"
          link="https://www.google.com"
          longText="link long text"
          linkText="link text"
          backLink="/"
          backState={{ sampleState: true }}
          external={false}
        />
      </Router>
    );

    expect(getByText('text'));
    expect(getByText('link long text'));
    expect(getByText('link text'));
  });

  test('renders BackNavigation with correct navigation', () => {
    const history = createMemoryHistory();

    // Mock props
    const mockBackLink = '/';
    const mockLink = '/test-link';

    const { getByText } = render(
      <Router history={history}>
        <BackNavigation
          text="text"
          link={mockLink}
          longText="link long text"
          linkText="link text"
          backLink={mockBackLink}
          backState={{ sampleState: true }}
          external={false}
        />
      </Router>
    );

    fireEvent.click(getByText('text'));
    expect(history.location.pathname).toBe(mockBackLink);

    fireEvent.click(getByText('link text'));
    expect(history.location.pathname).toBe(mockLink);
  });
});
