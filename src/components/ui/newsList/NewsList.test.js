import React from 'react';
import { render } from '@testing-library/react';
import NewsList from './NewsList';

describe('<NewsList />', () => {
  test('renders NewsList', () => {
    const link = 'https://www.google.com';
    const { getByText } = render(<NewsList newsList={[{ url: link }]} />);

    expect(getByText('google.com'));
  });
});
