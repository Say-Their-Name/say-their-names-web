import React from 'react';
import { render } from '@testing-library/react';
import ActionDetailsHeader from './ActionDetailsHeader';

describe('<ActionDetailsHeader />', () => {
  test('renders ActionDetailsHeader', () => {
    const { getByText, getByAltText } = render(
      <ActionDetailsHeader
        title="title"
        link="/"
        action="action"
        bannerImageUrl="https://www.google.com"
        socialCopy="socialCopy"
      />
    );

    expect(getByText('title'));
    expect(getByAltText('banner'));
    expect(getByText('action'));
  });
});
