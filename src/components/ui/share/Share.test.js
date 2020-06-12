import React from 'react';
import { render } from '@testing-library/react';
import Share from './Share';

describe('<Share />', () => {
  test('renders Share', () => {
    const { getByText } = render(
      <Share url="https://www.google.com" title="title" />
    );

    expect(getByText('Twitter'));
    expect(getByText('Facebook'));
    expect(getByText('Whatsapp'));
  });
});
