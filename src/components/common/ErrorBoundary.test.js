import React from 'react';
import { render } from '@testing-library/react';
import ErrorBoundary from './ErrorBoundary';

describe('<ErrorBoundary />', () => {
  test('renders ErrorBoundary', () => {
    const { getByText } = render(
      <ErrorBoundary>
        <p>Test</p>
      </ErrorBoundary>
    );
    expect(getByText('Test'));
  });
});
