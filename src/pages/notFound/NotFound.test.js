import React from 'react';
import { render } from '@testing-library/react';
import { Router } from 'react-router-dom';
import { createMemoryHistory } from 'history';
import NotFound from './NotFound';

describe('<NotFound />', () => {
  test('renders NotFound', () => {
    const history = createMemoryHistory();
    history.push('/');

    const { getByText } = render(
      <Router history={history}>
        <NotFound />
      </Router>
    );

    expect(getByText('404'));
    expect(getByText('Page not found'));
    expect(
      getByText(
        'Not all those who wander are lost, but it seems you may have taken a wrong turn.'
      )
    );
    expect(getByText('BACK TO HOME'));
  });

  test('renders NotFound with custom short and long messages', () => {
    const history = createMemoryHistory();
    history.push('/');

    const { getByText } = render(
      <Router history={history}>
        <NotFound message="message" longMessage="longMessage" />
      </Router>
    );

    expect(getByText('message'));
    expect(getByText('longMessage'));
  });
});
