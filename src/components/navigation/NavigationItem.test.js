import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { Router } from 'react-router-dom';
import { createMemoryHistory } from 'history';

import NavigationItem from './NavigationItem';

describe('<NavigationItem />', () => {
  test('renders NavigationItem', () => {
    const history = createMemoryHistory();

    const { getByText } = render(
      <Router history={history}>
        <NavigationItem name="name" path="/test" />
      </Router>
    );

    expect(getByText('name'));

    fireEvent.click(getByText('name'));
    expect(history.location.pathname).toBe('/test');
  });
});
