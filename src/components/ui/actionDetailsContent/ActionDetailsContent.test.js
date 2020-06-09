import React from 'react';
import { render } from '@testing-library/react';
import ActionDetailsContent from './ActionDetailsContent';

describe('<ActionDetailsContent />', () => {
  test('renders ActionDetailsContent', () => {
    const { getByText, getByAltText } = render(
      <ActionDetailsContent
        description="description"
        outcomeImageUrl="https://www.google.com"
        outcome="outcome"
        hashTags={[{ tag: '#tag', link: 'link' }]}
      />
    );

    expect(getByText('description'));
    expect(getByAltText('Outcome'));
    expect(getByText('outcome'));
    expect(getByText('#tag'));
  });
});
