import React from 'react';
import { render } from '@testing-library/react';
import { Router } from 'react-router-dom';
import { createMemoryHistory } from 'history';
import TermsOfService from './TermsOfService';

describe('<TermsOfService />', () => {
  test('renders TermsOfService', () => {
    const history = createMemoryHistory();
    const { getByText } = render(
      <Router history={history}>
        <TermsOfService />
      </Router>
    );

    expect(getByText('TERMS OF SERVICE FOR SAY THEIR NAMES'));
  });
});

