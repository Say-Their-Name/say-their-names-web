import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { Router } from 'react-router-dom';
import { createMemoryHistory } from 'history';
import GetInvolved from './GetInvolved';

describe('<GetInvolved />', () => {
  test('renders GetInvolved', () => {
    const history = createMemoryHistory();
    const { getByText, getByAltText } = render(
      <Router history={history}>
        <GetInvolved />
      </Router>
    );

    expect(getByText('Delayed justice is injustice'));
    expect(getByAltText('Black Lives Matter'));
  });
  test('renders correct links', () => {
    const history = createMemoryHistory();
    const { getByAltText } = render(
      <Router history={history}>
        <GetInvolved />
      </Router>
    );

    fireEvent.click(getByAltText('Black Lives Matter'));
    expect(history.location.pathname).toBe('/donations');
  });
});
