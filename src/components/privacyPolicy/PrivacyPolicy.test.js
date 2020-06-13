import React from 'react';
import { render } from '@testing-library/react';
import { Router } from 'react-router-dom';
import { createMemoryHistory } from 'history';
import PrivacyPolicy from './PrivacyPolicy';

describe('<PrivacyPolicy />', () => {
  test('renders Privacy Policy', () => {
    const history = createMemoryHistory();
    const { getByText } = render(
      <Router history={history}>
        <PrivacyPolicy />
      </Router>
    );

    expect(getByText('PRIVACY POLICY FOR SAY THEIR NAMES'));
  });
});
