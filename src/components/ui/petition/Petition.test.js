import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { Router } from 'react-router-dom';
import { createMemoryHistory } from 'history';
import Petition from './Petition';

describe('<Petition />', () => {
  test('renders Petition', () => {
    const history = createMemoryHistory();
    const { getByText, getByAltText } = render(
      <Router history={history}>
        <Petition
          id="1"
          title="title"
          description="description"
          img="https://www.google.ca"
          type="type"
          path="path"
        />
      </Router>
    );

    expect(getByText('TYPE'));
    expect(getByAltText('Image for title'));
    expect(getByText('title'));
    expect(getByText('description'));
    expect(getByText('FIND OUT MORE'));
  });
  test('renders correct links', () => {
    const history = createMemoryHistory();
    const { getByText } = render(
      <Router history={history}>
        <Petition
          id="1"
          title="title"
          description="description"
          img="https://www.google.ca"
          type="type"
          path="path"
        />
      </Router>
    );

    fireEvent.click(getByText('FIND OUT MORE'));
    expect(history.location.pathname).toBe('/path/1');
  });
});
