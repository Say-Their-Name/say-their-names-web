import React from 'react';
import { render } from '@testing-library/react';
import { Router } from 'react-router-dom';
import { createMemoryHistory } from 'history';

import ScrollToTop from './ScrollToTop';

describe('<ScrollToTop />', () => {
  Object.defineProperty(window, 'scrollTo', { value: jest.fn() });
  test('renders ScrollToTop', () => {
    const history = createMemoryHistory();
    history.push('/');

    const { rerender } = render(
      <Router history={history}>
        <ScrollToTop />
      </Router>
    );

    history.push('/test');
    rerender(
      <Router history={history}>
        <ScrollToTop />
      </Router>
    );

    expect(window.scrollTo).toHaveBeenCalled();
  });
});
