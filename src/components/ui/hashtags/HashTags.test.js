import React from 'react';
import { render } from '@testing-library/react';
import HashTags from './HashTags';

describe('<HashTags />', () => {
  test('renders HashTags', () => {
    const link = 'https://www.google.com';
    const { getByText } = render(
      <HashTags hashtags={[{ link, tag: 'tag' }]} />
    );

    expect(getByText('tag').closest('a')).toHaveAttribute('href', link);
  });
});
