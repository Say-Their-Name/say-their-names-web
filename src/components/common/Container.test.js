import React from 'react';
import { render } from '@testing-library/react';
import Container from './Container';

describe('<Container />', () => {
  test('renders Container', () => {
    const { getByText } = render(
      <Container>
        <p>Test</p>
      </Container>
    );

    expect(getByText('Test'));
  });
});
